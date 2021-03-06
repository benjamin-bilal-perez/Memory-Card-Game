declare class Game {
    private _timeOutput;
    private _deckOutput;
    private _playAgainButton;
    private _resultOutput;
    private _selectedCards;
    private _guessedPairsOfCards;
    private _deck;
    private _selectionLocked;
    private _hasLost;
    private _board;
    private _images;
    private _time;
    private _selectedPosition;
    private _selectectedImgs;
    private _interval;
    start(): void;
    chooseCards(position1: number, position2: number): void;
    showSelected(position1: number, position2: number): void;
    checkEquality(position1: number, position2: number): boolean;
    initializeBoard(): void;
    countDown(): void;
    restart(): void;
    switchToBackImage(): void;
    lose(): void;
    checkWin(): void;
    win(): void;
    clickCard(img: HTMLImageElement, i: number): void;
    verifyPairsOfCards(): void;
    get guessedPairsOfCards(): number;
}
export { Game };
