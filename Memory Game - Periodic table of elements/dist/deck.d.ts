import { Card } from "./card.js";
declare class Deck {
    private _cardsArray;
    private _cardsNames;
    constructor();
    fill(): void;
    shuffle(): void;
    restart(): void;
    get cardsArray(): Array<Card>;
    get length(): number;
}
export { Deck };
