import {LitElement, html, css} from "lit-element";

export class MyLitElement extends LitElement {
    render() {
        return html`
            My Lit Component is <span class="mood">${this.mood}</span>!
        `
    }
}

MyLitElement.properties = {
    mood: {type: String}
}

MyLitElement.styles = css`
        .mood {
            color: green;
        }
    `;

customElements.define('my-lit-element', MyLitElement);