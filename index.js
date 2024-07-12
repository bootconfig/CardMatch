import {Card} from "./components/card.js"; // imports the Card class from card.js file

customElements.define("my-card", Card);

let square = "./images/square.png";
let circle = "./images/circle.png";
let triangle = "./images/triangle.png";
let pentagone = "./images/pentagone.png";
let free = "./images/free.png";

const paths = [square, square, circle, circle, triangle, triangle, pentagone, pentagone, free]

//for(let i=0; i<9; i++) {
//    const card = document.createElement("my-card");
//    card.setAttribute("src", `${paths[i]}`);
//    window.document.body.append(card);
//}
