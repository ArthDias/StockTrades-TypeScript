import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
export class TradeController {
    constructor() {
        this.trades = new Trades();
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
    }
    add() {
        const trade = this.setTrade();
        this.trades.addTrades(trade);
        console.log(this.trades.tradesList());
        this.cleanForm();
    }
    setTrade() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseInt(this.inputValue.value);
        return new Trade(date, amount, value);
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
