export const createLookup = (key, list = []) => {
    return list.reduce((prev, obj) => {
        if (obj[key]) {
            prev[obj[key]] = obj;
        }
        return prev;
    }, {});
};

export const getUniqueCoins = (data) => {
    const lookup = createLookup("coin", data);
    return Object.keys(lookup);
}