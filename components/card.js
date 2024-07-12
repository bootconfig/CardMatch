export class Card extends HTMLElement {

    css = `
    .button {
        padding: 12px;
        text-align: center;
       
    }`;
    
    template = () => `
    <button class="button">
        <img src="${this.image}" alt="no-image">
        <slot></slot>
    </button>
    `;
    constructor() {
        super();

        this.face = this.getAttribute("face");
        this.back = this.getAttribute("back");
        this.image = "";

        if (this.getAttribute("status") == "up") {
            this.image = this.face;
        }
        else {
            this.image = this.back;
        }

        this.attachShadow({mode: "open"});
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>${this.css.trim()}</style>
        ${this.template().trim()}
        `;

        this.shadowRoot.querySelector(".button").addEventListener("click", this.flip);
    }

    flip = () => {
        if (this.getAttribute("status") == "down") {
            this.setAttribute("status", "up");
            this.image = this.face;
        }
        else {
            this.setAttribute("status", "down");
            this.image = this.back;
        }
    
        this.render();
    }
}