import { Trade } from "./trade.js";

export class Trades {
    private trades: Array<Trade> = [];

    addTrades(trade: Trade){
        this.trades.push(trade);
    }

    tradesList(): Array<Trade>{
        return this.trades
    }
}