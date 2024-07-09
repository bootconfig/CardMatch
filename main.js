let square = "square.png";
let circle = "circle.png";
let triangle = "triangle.png";
let pentagone = "pentagone.png";
let free = "free.png";

class Card {
    constructor(image, description, status) {
        this.image = image;
        this.description = description;
        this.status = status;
        this.card = this.#createButton();
    }

    #createButton() { 
        const btn = document.createElement('button');
        btn.style.background=`url(${this.image})`;
        btn.style.width = "256px";
        btn.style.height = "256px";
        
        return btn;
    }
}


const Board = {
    cards:[],
    create: function() {

        for(let i=0; i<2; i++) {
            Board.cards.push(new Card(square, "square", "DOWN"));
            Board.cards.push(new Card(circle, "circle", "DOWN"));
            Board.cards.push(new Card(triangle, "triangle", "DOWN"));
            Board.cards.push(new Card(pentagone, "pentagone", "DOWN"));
        }
        
        Board.cards.push(new Card(free, "free", "UP"));

        for(let i=0; i<9; i++) {
            document.body.appendChild(Board.cards[i].card);
        }
    }
}

Board.create();