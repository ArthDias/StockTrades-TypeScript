export class Trade {
    constructor(
        private _date: Date,
        public readonly amount: number,
        public readonly value: number
    ) {}

    get date(): Date {
        const data = new Date(this._date.getTime());
        return data
    }
    get volume(): number {
        return this.amount * this.value;
    }
}