import { Trades } from "../models/trades.js";

export class TradesView {

    private element: HTMLElement;

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }

    template(model: Trades): string {
        return `
        <table class="table table-hover tablebordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>VALUE</th>
                </tr>
            </thead>
            <tbody>
            ${model.tradesList().map(trade => {
                return `
                    <tr>
                        <td>${new Intl.DateTimeFormat().format(trade.date)}</td>
                        <td>${trade.amount}</td>
                        <td>${trade.value}</td>
                    </tr>
                `;
            }).join('')}
            </tbody>
        </table>
        `;
    }

    update(model: Trades): void {
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = template;
    }
}