import { Card } from "./card.js";
class Deck {
    constructor() {
        this._cardsArray = [];
        this._cardsNames = ["Aluminum.png", "Aluminum.png", "Beryllium.png", "Beryllium.png", "Boron.png", "Boron.png", "Fluorine.png", "Fluorine.png", "Helium.png", "Helium.png", "Hydrogen.png", "Hydrogen.png", "Lithium.png", "Lithium.png", "Scandium.png", "Scandium.png"];
        this.fill();
        this.shuffle();
    }
    fill() {
        for (let i = 0; i < this._cardsNames.length; i++) {
            let carta = new Card(this._cardsNames[i]);
            this._cardsArray.push(carta);
        }
    }
    shuffle() {
        this._cardsArray = this._cardsArray.sort(function () { return Math.random() - 0.5; });
    }
    restart() {
        this._cardsArray = [];
        this.fill();
        this.shuffle();
    }
    get cardsArray() {
        return this._cardsArray;
    }
    get length() {
        return this._cardsArray.length;
    }
}
export { Deck };
//# sourceMappingURL=deck.js.map