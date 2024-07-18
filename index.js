import {Card} from "./components/card.js"; // imports the Card class from card.js file
import {Score} from "./components/score.js";

customElements.define("my-card", Card);
customElements.define("my-score", Score);