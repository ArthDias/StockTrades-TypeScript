import { Trade } from "./trade.js";

export class Trades {
    private trades: Trade[] = [];

    addTrades(trade: Trade){
        this.trades.push(trade);
    }
    tradesList(): readonly Trade[]{
        return this.trades;
    }
}