export default class Card extends HTMLElement {

    css = `
    .button {
        display: block;
        border-width: 0px;
        border-radius: 8px;
        padding-top: 0px;
        padding-right: 0px;
        padding-left: 0px;
        padding-bottom: 0px;
        cursor: pointer;
        width: 125px;
        height: 125px;
    }

    .img {
        display: block;
        width: 125px;
        height: 125px;
    }`;
        
    template = () => `
    <button class="button">
        <img class="img" src="${this.image}">
        <slot></slot>
    </button>
    `;
    
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    render() {
        this.shadowRoot.innerHTML =
        `<style>${this.css.trim()}</style>
        ${this.template().trim()}
        `;

        this.shadowRoot.querySelector(".button").addEventListener("click", this.flip);
        console.log(this.getAttribute('face'));
    }

    connectedCallback() {
        this.face = this.getAttribute('face');
        this.back = this.getAttribute('back');
        this.image = this.back;
        this.text = this.innerHTML;
        this.render();
    }

    attributeChangedCallback(attributeName, oldVal, newVal) {
        if (attributeName == 'face') {
            this.face = newVal;
        }

        if (attributeName == 'back') {
            this.back = newVal;
        }
    }

    static get observedAttributes() {
        return ["face", "back"];
    }

    flip = () => {
        if (this.image == this.face) {
            this.image = this.back;
        }
        else {
            this.image = this.face;
        }

        this.render();
    }
}