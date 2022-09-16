import { shouldNotifyChange } from "./notification.js";


describe("shouldNotifyChange", () => {
    it("should notify when metric is greater than set value", () => {
        const notification = {
            metric: "price_change_24h",
            change: true,
            value: 100,
            coin: "bitcoin",
            email: "user@example.com",

        };
        const marketLookup = {
            bitcoin: {
                price_change_24h: 200
            }
        };
        const snapshotLookup = {
            bitcoin: {
                price_change_24h: 50
            }
        }
        const email = shouldNotifyChange(notification, marketLookup, snapshotLookup);
        expect(email).toBeTruthy();
    });


    it("should notify when metric is less than set value", () => {
        const notification = {
            metric: "price_change_24h",
            change: false,
            value: 100,
            coin: "bitcoin",
            email: "user@example.com",

        };
        const marketLookup = {
            bitcoin: {
                price_change_24h: 50
            }
        };
        const snapshotLookup = {
            bitcoin: {
                price_change_24h: 200
            }
        }
        const email = shouldNotifyChange(notification, marketLookup, snapshotLookup);
        expect(email).toBeTruthy();
    });


    it("should notify when a negative metric is greater than set value", () => {
        const notification = {
            metric: "price_change_24h",
            change: true,
            value: -3.5,
            coin: "bitcoin",
            email: "user@example.com",

        };
        const marketLookup = {
            bitcoin: {
                price_change_24h: -2.5
            }
        };
        const snapshotLookup = {
            bitcoin: {
                price_change_24h: -5.45
            }
        }
        const email = shouldNotifyChange(notification, marketLookup, snapshotLookup);
        expect(email).toBeTruthy();

    });


    it("should notify when a negative metric is less than set value", () => {
        const notification = {
            metric: "price_change_24h",
            change: false,
            value: -1.5,
            coin: "bitcoin",
            email: "user@example.com",

        };
        const marketLookup = {
            bitcoin: {
                price_change_24h: -5.45
            }
        };
        const snapshotLookup = {
            bitcoin: {
                price_change_24h: -0.5
            }
        }
        const email = shouldNotifyChange(notification, marketLookup, snapshotLookup);
        expect(email).toBeTruthy();
    });

    it("should not notify if metric is not greater than set value", () => {
        const notification = {
            metric: "price_change_24h",
            change: true,
            value: 100,
            coin: "bitcoin",
            email: "user@example.com",

        };
        const marketLookup = {
            bitcoin: {
                price_change_24h: 50
            }
        };
        const snapshotLookup = {
            bitcoin: {
                price_change_24h: 200
            }
        }
        const email = shouldNotifyChange(notification, marketLookup, snapshotLookup);
        expect(email).toBe(false);
    });

    it("should not notify if metric is not less than set value", () => {
        const notification = {
            metric: "price_change_24h",
            change: false,
            value: 100,
            coin: "bitcoin",
            email: "user@example.com",

        };
        const marketLookup = {
            bitcoin: {
                price_change_24h: 200
            }
        };
        const snapshotLookup = {
            bitcoin: {
                price_change_24h: 50
            }
        }
        const email = shouldNotifyChange(notification, marketLookup, snapshotLookup);
        expect(email).toBe(false);
    });

    it("should skip notification if there is no latest market data", () => {
        const notification = {
            metric: "price_change_24h",
            change: false,
            value: 100,
            coin: "solana",
            email: "user@example.com",

        };
        const marketLookup = {
            bitcoin: {
                price_change_24h: 100
            }
        };
        const snapshotLookup = {
            solana: {
                price_change_24h: 200
            }
        }
        const email = shouldNotifyChange(notification, marketLookup, snapshotLookup);
        expect(email).toBe(false);
    });

    it("should skip notification of a greater value if snapshot data is already higher", () => {
        const notification = {
            metric: "price_change_24h",
            change: true,
            value: 100,
            coin: "solana",
            email: "user@example.com",

        };
        const marketLookup = {
            solana: {
                price_change_24h: 300
            }
        };
        const snapshotLookup = {
            solana: {
                price_change_24h: 200
            }
        }
        const email = shouldNotifyChange(notification, marketLookup, snapshotLookup);
        expect(email).toBe(false);
    });

    it("should skip notification of a lower value if snapshot data is already lower", () => {
        const notification = {
            metric: "price_change_24h",
            change: false,
            value: 19772.55,
            coin: "solana",
            email: "user@example.com",

        };
        const marketLookup = {
            solana: {
                price_change_24h: 19764.84
            }
        };
        const snapshotLookup = {
            solana: {
                price_change_24h: 19763.12
            }
        }
        const email = shouldNotifyChange(notification, marketLookup, snapshotLookup);
        expect(email).toBe(false);
    });
});