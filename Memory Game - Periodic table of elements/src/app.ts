import { Deck } from "./deck.js";
import { Game } from "./game.js";


class App {

  main() {
    let deck: Deck = new Deck();
    deck.fill();
    
    let game: Game = new Game();
    game.start();
  }

  
}

let app: App = new App();
app.main();

export { App };
