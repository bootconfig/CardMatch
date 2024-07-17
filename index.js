import {Card} from "./components/card.js"; // imports the Card class from card.js file

customElements.define("my-card", Card);

let square = "./images/square.svg";
let circle = "./images/circle.svg";
let triangle = "./images/triangle.svg";
let pentagone = "./images/pentagone.svg";
let free = "./images/free.svg";

const paths = [square, square, circle, circle, triangle, triangle, pentagone, pentagone, free]

//for(let i=0; i<9; i++) {
//    const card = document.createElement("my-card");
//    card.setAttribute("src", `${paths[i]}`);
//    window.document.body.append(card);
//}
