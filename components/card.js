export class Card extends HTMLElement {

    css = `
    .button {
        border-width: 0px;
        border-radius: 8px;
        margin: 0px;
        padding: 0px;
        cursor: pointer;
    }

    .img {
        display: block;
        
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .span {
        display: block;
        padding: 4px;
        text-align:left;
    }`;
        
    template = () => `
    <button class="button">
        <img class="img" src="${this.image}" width="256px" height="256px">
        <!--<span class="span">Name: Circle </span>-->
        <!--<span class="span">Value: 20pts</span>-->
    </button>   
    `;
    
    constructor() {
        super();

        this.face = this.getAttribute("face");
        this.back = this.getAttribute("back");
        this.image = this.back;

        this.attachShadow({mode: "open"});
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML =
        `<style>${this.css.trim()}</style>
        ${this.template().trim()}
        `;

        this.shadowRoot.querySelector(".button").addEventListener("click", this.flip);
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