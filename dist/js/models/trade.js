export class Trade {
    constructor(_date, amount, value) {
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    get date() {
        const data = new Date(this._date.getTime());
        return data;
    }
    get volume() {
        return this.amount * this.value;
    }
}
