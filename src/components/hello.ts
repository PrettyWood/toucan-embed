import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { theme } from "../styles/theme";

export const HelloTag = "toucan-hello";

export type HelloEvents = {
  countUpdated: {
    count: number;
  };
};

@customElement(HelloTag)
export class HelloElement extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
        color: var(--color-primary);
      }
    `,
  ];

  @property() name = "Toucan";

  private onClick() {
    this._counter++;
    const event = new CountUpdatedEvent({
      count: this._counter,
    });
    this.dispatchEvent(event);
  }

  @state() private _counter = 0;

  render() {
    return html`
      <h1>Hello, ${this.name}</h1>
      <h2>Count: ${this._counter}</h2>
      <button @click=${this.onClick}>Increment</button>
    `;
  }
}

class CountUpdatedEvent extends CustomEvent<HelloEvents["countUpdated"]> {
  constructor(eventDetail: HelloEvents["countUpdated"]) {
    super("countUpdated", {
      bubbles: true,
      composed: true,
      detail: eventDetail,
    });
  }
}
