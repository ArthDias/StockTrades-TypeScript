export class Trades {
    constructor() {
        this.trades = [];
    }
    addTrades(trade) {
        this.trades.push(trade);
    }
    tradesList() {
        return this.trades;
    }
}
