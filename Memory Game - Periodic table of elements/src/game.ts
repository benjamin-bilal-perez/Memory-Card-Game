import { Card } from "./card.js";
import { Deck } from "./deck.js";

class Game {
    private _timeOutput: HTMLElement = document.getElementById("time");
    private _deckOutput: HTMLElement = document.getElementById("deck");
    private _playAgainButton: HTMLElement = document.getElementById("play-again");
    private _resultOutput: HTMLElement = document.getElementById("result");

    private _selectedCards: Array<Card> = [];
    private _guessedPairsOfCards: number = 0;
    private _deck: Deck;
    private _selectionLocked: boolean = false;
    private _hasLost: boolean = false;
    private _board: HTMLElement;
    private _images: Array<HTMLElement> = [];
    private _time: number = 80;
    private _selectedPosition: Array<any> = [];
    private _selectectedImgs: Array<any> = [];
    private _interval: number = setInterval(this.countDown.bind(this), 1000);
    

    start() {
        this._playAgainButton.addEventListener("click", this.restart.bind(this));
        this._playAgainButton.hidden = true;
        this._deck = new Deck();
        this.initializeBoard();
        this.countDown();
    }

    chooseCards(position1: number, position2: number): void {
        this._selectedCards[position1] = this._deck.cardsArray[position1];
        this._selectedCards[position2] = this._deck.cardsArray[position2];
        this.checkEquality(position1, position2);
    }

    showSelected(position1: number, position2: number) {
        this._selectedCards[position1].flip();
        this._selectedCards[position2].flip();
    }

    checkEquality(position1: number, position2: number): boolean {
        return (this._selectedCards[position1].frontFace === this._selectedCards[position2].frontFace);
    }

    
    initializeBoard() {
        this._board = document.getElementById("deck");
        for (let i = 0; i < this._deck.length; i++) {
            let img: HTMLElement = document.createElement("img");
            (img as HTMLImageElement).src = "imgs/backFace.png";

            img.addEventListener("click", this.clickCard.bind(this, img, i));
            this._board.appendChild(img);
            this._images.push(img);
        }
    }

    countDown() {
        this._time--;

        if (this._time <= 80 && this._time > 75) {
            document.getElementById("body").style.backgroundColor = "#ffdb4d";
        } else if (this._time <= 75 && this._time > 70) {
            document.getElementById("body").style.backgroundColor = "#ffd633";
        } else if (this._time <= 70 && this._time > 65) {
            document.getElementById("body").style.backgroundColor = "#ffd11a";
        } else if (this._time <= 65 && this._time > 60) {
            document.getElementById("body").style.backgroundColor = "#ffcc00";
        } else if (this._time <= 60 && this._time > 55) {
            document.getElementById("body").style.backgroundColor = "#e6b800";
        } else if (this._time <= 55 && this._time > 50) {
            document.getElementById("body").style.backgroundColor = "#cca300";
        } else if (this._time <= 50 && this._time > 45) {
            document.getElementById("time").innerHTML = this._time.toString();
            document.getElementById("time").style.color = "orange";
            document.getElementById("body").style.backgroundColor = "#b38f00";
        } else if (this._time <= 45 && this._time > 40) {
            document.getElementById("body").style.backgroundColor = "#997a00";
        } else if (this._time <= 40 && this._time > 35) {
            document.getElementById("body").style.backgroundColor = "#806600";
        } else if (this._time <= 35 && this._time > 30) {
            document.getElementById("body").style.backgroundColor = "#665200";
        } else if (this._time <= 30 && this._time > 25) {
            document.getElementById("body").style.backgroundColor = "#4d3d00";
        } else if (this._time <= 25 && this._time > 20) {
            document.getElementById("body").style.backgroundColor = "#332900";
        } else if (this._time <= 20 && this._time > 10) {
            document.getElementById("body").style.backgroundColor = "#1a1400";
        } else if (this._time <= 10 && this._time > 0) {
            document.getElementById("body").style.backgroundColor = "#000000";
        }

        if (this._time <= 40 && this._time > 10) {
            document.getElementById("time").innerHTML = this._time.toString();
            document.getElementById("time").style.color = "orange";

          } else if (this._time <= 10) {
            document.getElementById("time").innerHTML = this._time.toString();
            document.getElementById("time").style.color = "red";
          } else {
            document.getElementById("time").innerHTML = this._time.toString();
          }

        if (this._time == 0) {
            clearInterval(this._interval);
            this.lose();
        }
    }

    restart() {
        this._guessedPairsOfCards = 0;
        this._hasLost = false;
        this._deck.restart();
        this.switchToBackImage();
        this._selectedPosition = [];
        this._selectectedImgs = [];
        this._selectionLocked = false;

        this._deckOutput.hidden = false;
        this._timeOutput.hidden = false;
        this._playAgainButton.hidden = true;
        this._resultOutput.hidden = true;

        this._time = 80;
        this._deckOutput.style.filter = "grayscale(0%)";
        document.getElementById("time").style.color = "black";
        document.getElementById("body").style.backgroundColor = "#ffe066";
        this._interval = setInterval(this.countDown.bind(this), 1000);
        this.countDown();
    }

    switchToBackImage() {
        for (let i = 0; i < this._images.length; i++) {
            (this._images[i] as HTMLImageElement).src = "imgs/backFace.png";
        }  
    }

    lose() {
        this._hasLost = true;

        this._playAgainButton.hidden = false;
        this._resultOutput.hidden = false;

        (this._resultOutput as HTMLImageElement).src = "imgs/YouLose.png";
        this._resultOutput.style.borderColor = "red";
        
        this._deckOutput.style.filter = "grayscale(100%)";
    }

    checkWin() {
        if (this._guessedPairsOfCards == this._deck.cardsArray.length / 2) {
            this.win();
        }   
    }

    win () {
        this._selectedPosition = [];
        this._selectectedImgs = [];
           
        clearInterval(this._interval);
        this._playAgainButton.hidden = false;
        this._resultOutput.hidden = false;

        (this._resultOutput as HTMLImageElement).src = "imgs/YouWin.png";
        this._resultOutput.style.borderColor = "green";

        this._deckOutput.style.filter = "grayscale(100%)";
    }

    
    clickCard(img: HTMLImageElement, i: number) {
        if (this._deck.cardsArray[i].faceUp || this._selectionLocked || this._hasLost) {
            return;
        }
        this._deck.cardsArray[i].flip();
        img.src = "imgs/" + this._deck.cardsArray[i].frontFace;
        this._selectedPosition.push(i);
        this._selectectedImgs.push(img);

        if (this._selectedPosition.length == 2) {
            this._selectionLocked = true;
            setTimeout(this.verifyPairsOfCards.bind(this), 1500);
        } 
    }

    verifyPairsOfCards() {
        this.chooseCards(this._selectedPosition[0], this._selectedPosition[1]);
                
        if (this.checkEquality(this._selectedPosition[0], this._selectedPosition[1])) {
            this._deck.cardsArray[this._selectedPosition[0]].turnCorrect();
            this._deck.cardsArray[this._selectedPosition[1]].turnCorrect();
            this._guessedPairsOfCards++;
            this.checkWin();

        } else {
            this._selectectedImgs[0].src = "imgs/backFace.png";
            this._selectectedImgs[1].src = "imgs/backFace.png";            
            
            this._deck.cardsArray[this._selectedPosition[0]].flip();
            this._deck.cardsArray[this._selectedPosition[1]].flip();

        } 
        this._selectectedImgs = [];
        this._selectedPosition = [];
        this._selectionLocked = false;
    }

    get guessedPairsOfCards(): number {
        return this._guessedPairsOfCards;
    }
}

export { Game };
