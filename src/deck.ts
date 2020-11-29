import { Card } from "./card.js";

class Deck {
    private _cardsArray: Array<Card> = [];
    private _cardsNames: Array<string> = ["Aluminum.png", "Aluminum.png", "Beryllium.png", "Beryllium.png", "Boron.png", "Boron.png", "Fluorine.png", "Fluorine.png", "Helium.png", "Helium.png", "Hydrogen.png", "Hydrogen.png", "Lithium.png", "Lithium.png", "Scandium.png", "Scandium.png"];

    constructor() {
        this.fill();
        this.shuffle();
    }
    
    fill() {
        for (let i = 0; i < this._cardsNames.length; i++) {
            let carta: Card = new Card(this._cardsNames[i]);
            this._cardsArray.push(carta);
        }
    }

    shuffle() {
        this._cardsArray = this._cardsArray.sort(function () { return Math.random() - 0.5 });
    }

    restart() {
        this._cardsArray = [];
        this.fill();
        this.shuffle();
    }

    get cardsArray(): Array<Card> {
        return this._cardsArray;
    }

    get length() {
        return this._cardsArray.length;
    }
}


export { Deck };
