import axios from "axios";

export const getAllfromTable = async (supabase, table) => {
  const { data, error } = await supabase.from(table).select();
  if (error) throw new Error(error.message);
  return data;
}

export const updateSnapshot = async (supabase, marketData) => {
  const { error } = await supabase
    .from('snapshots')
    .upsert(marketData.map(({
      id,
      current_price,
      price_change_24h,
      market_cap_change_24h,
      price_change_percentage_1h_in_currency,
      price_change_percentage_24h,
      ath_change_percentage,
      atl_change_percentage,
      market_cap_change_percentage_24h,
    }) => ({
      id,
      current_price,
      price_change_24h,
      market_cap_change_24h,
      price_change_percentage_1h_in_currency,
      price_change_percentage_24h,
      ath_change_percentage,
      atl_change_percentage,
      market_cap_change_percentage_24h,
    })));
  if (error) throw new Error(error.message);

};


export const getLatestMarketData = async (coins = [], endpoint = "https://api.coingecko.com/api/v3/coins/markets") => {
  const { data } = await axios.get(`${endpoint}?vs_currency=usd&price_change_percentage=1h&ids=${coins.join(",")}`);
  if (!data) throw new Error("Could not load latest market data");
  return data;

};
