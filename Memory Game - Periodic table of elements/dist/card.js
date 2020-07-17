class Card {
    constructor(frontFace) {
        this._backFace = "backFace.png";
        this._faceUp = false;
        this._correct = false;
        this._frontFace = frontFace;
    }
    flip() {
        this._faceUp = !this._faceUp;
    }
    turnDown() {
        this._faceUp = false;
    }
    get frontFace() {
        if (this._faceUp || this._correct) {
            return this._frontFace;
        }
        else {
            return undefined;
        }
    }
    turnCorrect() {
        this._correct = true;
    }
    get correct() {
        return this._correct;
    }
    get faceUp() {
        return this._faceUp;
    }
    get backFace() {
        return this._backFace;
    }
}
export { Card };
//# sourceMappingURL=card.js.map