import {Card} from "./card.js"; // imports the Card class from card.js file

customElements.define("my-card", Card);

let square = "square.png";
let circle = "circle.png";
let triangle = "triangle.png";
let pentagone = "pentagone.png";
let free = "free.png";

const paths = [square, square, circle, circle, triangle, triangle, pentagone, pentagone, free]

for(let i=0; i<9; i++) {
    const card = document.createElement("my-card");
    card.setAttribute("src", `${paths[i]}`);
    window.document.body.append(card);
}
