import { getUniqueCoins, createLookup } from "./utils.js";
import { getAllfromTable, getLatestMarketData, updateSnapshot } from "./db.js";
import CourierClient from "./courier.js";

const MetricMap = {
    current_price: "Price",
    price_change_24h: "Price Change in 24 hours",
    market_cap_change_24h: "Market Cap Change in 24 hours",
    price_change_percentage_1h_in_currency: "Price Change Percentage in 1 hour",
    price_change_percentage_24h: "Price Change Percentage in 24 hours",
    ath_change_percentage: "All-Time High Change Percentage",
    atl_change_percentage: "All-Time Low Change Percentage",
    market_cap_change_percentage_24h: "Market Cap Change Percentage in 24 hours",
}

const changeMap = {
    true: "Greater than",
    false: "Less than"
}

const compareChange = (compareValue, newValue, change) => {
    // for positive change use greater than
    return change ? compareValue < newValue : compareValue > newValue;
}

export const shouldNotifyChange = (notification, marketLookup, snapshotLookup) => {
    const { metric, change, value, coin, email } = notification;

    // get latest market data for coin
    const latestData = marketLookup[coin];

    // skip if latest data not found
    if (!latestData) return false;

    // get snapshot data for coin
    const snapshotData = snapshotLookup[coin];
    // check if the change has not already been notified
    if (snapshotData) {
        // get value from snapshot 
        const snapshotValue = snapshotData[metric];
        if (snapshotValue)
            if (compareChange(value, snapshotValue, change)) return false;

    }

    // get the requested metric value
    const latestValue = latestData[metric];

    // check if it should be notified  
    if (!compareChange(value, latestValue, change)) return false;
    const valueSuffix = metric.includes('percentage') ? "%" : "USD";
    return {
        email,
        metric: MetricMap[metric],
        targetValue: `${value} ${valueSuffix}`,
        latestValue: `${latestValue} ${valueSuffix}`,
        change: changeMap[change],
        coin: latestData.name
    }

}


const sendEmail = async ({ email, metric, targetValue, latestValue, change, coin }) => {
    const { requestId } = await CourierClient.send({
        message: {
            to: {
                email: email,
            },
            channels: {
                "email": {
                    override: {
                        subject: `New update on the ${metric} of ${coin}`
                    }
                }
            },
            template: "NS6KJEXFZNMYVCHZD8AQ1X7NAVQR",
            data: {
                metric,
                targetValue,
                latestValue,
                change,
                coin
            },
        },
    });
    return requestId;
}


const notify = async (supabase) => {
    // get all notifications
    const notifications = await getAllfromTable(supabase, "notifications");

    // get unique coins from the notification and load market data 
    const coins = getUniqueCoins(notifications);
    const marketData = await getLatestMarketData(coins);

    // create a lookup for market data
    const marketLookup = createLookup("id", marketData);

    // get previous snapshot of market data
    const snapshots = await getAllfromTable(supabase, "snapshots");

    // create a lookup for snapshot data
    const snapshotLookup = createLookup("coin", snapshots);

    // iterate over all notifications and evaluate if email should be sent
    const emails = [];
    for (const notification of notifications) {
        const email = shouldNotifyChange(notification, marketLookup, snapshotLookup);
        if (email) emails.push(email);
    }

    // take new snapshot of market data
    updateSnapshot(supabase, marketData);
    const requests = [];
    for (const email of emails) {
        const id = await sendEmail(email);
        requests.push(id);
    }
    return requests

}

export default notify;