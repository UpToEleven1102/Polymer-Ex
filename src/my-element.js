import {PolymerElement, html} from "@polymer/polymer";

class MyElement extends PolymerElement {
    static get properties() {
        return {
            mood: String,
        }
    }

    static get template() {
        return html`
            <style>
                .mood {
                    color: green;
                }
            </style>
            
            Web Component is <span class="mood">[[mood]]</span>
        `
    }

    constructor() {
        super()
    }
}

customElements.define('my-element', MyElement);