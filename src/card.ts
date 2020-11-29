class Card {
    private _backFace: string = "backFace.png";
    private _frontFace: string;
    private _faceUp: boolean = false;
    private _correct: boolean = false;

    constructor(frontFace: string) {
        this._frontFace = frontFace;
    }

    flip(): void {
        this._faceUp = !this._faceUp;
    }

    turnDown() {
        this._faceUp = false;
        
    }


    get frontFace() {
        if (this._faceUp || this._correct) {
            return this._frontFace;
        } else {
            return undefined;
        }
    }

    
    turnCorrect() {
       this._correct = true;
    }

    get correct() {
        return this._correct;
    }

    get faceUp(): boolean {
        return this._faceUp;
    }


    get backFace() {
        return this._backFace;
    }
    

}

export {Card};
