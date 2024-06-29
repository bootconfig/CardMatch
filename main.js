let square = "square.png";
let circle = "circle.png";
let triangle = "triangle.png";
let pentagone = "pentagone.png";
let free = "free.png";

function Card(image, description, visible, id) {
    this.image = image;
    this.description = description;
    this.visible = visible;
    this.id = id;
}

let images = [free, square, square, circle, circle, triangle, triangle, pentagone, pentagone];
let cards = [];

for (let i=0; i<9; i++) {
        const card = new Card(images[i], "Card name: " + images[i], true, i);
        cards.push(card);
    }

for (let i=0; i<9; i++) {
        document.getElementById("descriptions").innerHTML +=cards[i].description + "<br>";
    }