export class Trade {
    constructor(
        private _date: Date,
        public readonly amount: number,
        public readonly value: number
    ) {}

    get date(): Date {
        return this._date;
    }
    get volume(): number {
        return this.amount * this.value;
    }
}