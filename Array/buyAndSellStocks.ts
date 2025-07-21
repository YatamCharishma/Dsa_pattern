function maxProfit(prices: number[]): number {
    // prices[i] - today price - difference with min of old prices.
    // if more update it to price.
    let profit = 0
    let min = prices[0];
    for(let i = 1; i < prices.length; i++){
        if(profit < prices[i] - min){
            profit = prices[i] - min;
        }
        if(prices[i] < min){
            min = prices[i]
        }
    }
    return profit
};
