export class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        const image = this.getAttribute("src");

        this.shadowRoot.innerHTML = `
            <style>${css}</style>
            <button class="button">
                ${
                    (image && `<img src="${image}">`) || ""
                } 
                <slot class="label"></slot>
            </button>
        `;
    }
}

const css = `
.button {
    background-color: white;
}
`;