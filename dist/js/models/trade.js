export class Trade {
    constructor(_date, amount, value) {
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    get date() {
        return this._date;
    }
    get volume() {
        return this.amount * this.value;
    }
}
