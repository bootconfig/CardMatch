import Card from "./components/card.js"; // imports the Card class from card.js file
import {Score} from "./components/score.js";

customElements.define("my-card", Card);
customElements.define("my-score", Score);

const cardArry = ["square",
               "square",
               "circle",
               "circle",
               "triangle",
               "triangle",
               "pentagone",
               "pentagone",
               "free"
            ];

const r1 = document.getElementById("board");

// dealing cards
for(let i=0; i<9; i++) {
    
    // creates a random number [0,1)
    let randnum = Math.random();

    // contains the number between 0 and cardArry.length and makes it an integer
    let randindx = Math.floor(randnum * cardArry.length);
    
    // creates a card element with image from cardArry
    const card = document.createElement("my-card");

    // creates custom card element
    card.setAttribute("face", `./images/${cardArry[randindx]}.svg`);
    card.setAttribute("back", "./images/backingBlue.svg");
    r1.appendChild(card);

    // removes 1 item from cardArry
    cardArry.splice(randindx, 1);
}