import { Deck } from "./deck.js";
import { Game } from "./game.js";
class App {
    main() {
        let deck = new Deck();
        deck.fill();
        let game = new Game();
        game.start();
    }
}
let app = new App();
app.main();
export { App };
//# sourceMappingURL=app.js.map