export class Score extends HTMLElement {
    
    css = `

    h1 {
        display: inline;
        padding: 8px;
        border-radius: 4px;
        background-color: white;
    }
    `;

    constructor() {
        super()

        this.score = 0;

        const shadow = this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `<style>${this.css}</style><h1><slot></slot> ${this.score}</h1>`;
       }
}