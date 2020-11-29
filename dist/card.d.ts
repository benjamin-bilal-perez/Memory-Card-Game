declare class Card {
    private _backFace;
    private _frontFace;
    private _faceUp;
    private _correct;
    constructor(frontFace: string);
    flip(): void;
    turnDown(): void;
    get frontFace(): string;
    turnCorrect(): void;
    get correct(): boolean;
    get faceUp(): boolean;
    get backFace(): string;
}
export { Card };
