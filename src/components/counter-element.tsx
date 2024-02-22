import React from "react";
import { createRoot } from "react-dom/client";
import { StyleSheetManager } from "styled-components";

import { Counter } from "./Counter";
// import r2wc from "@r2wc/react-to-web-component";

// const CounterElement = r2wc(Counter, {
//   props: {
//     "name": "string",
//     "onCountUpdated": "function"
//   },
//   shadow: "open"
// })

// customElements.define("counter-element", CounterElement)

export class CounterElement extends HTMLElement {
  static observedAttributes = ["name", "on-count-updated"];

  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const renderIn = document.createElement("div");
    shadow.appendChild(renderIn);

    createRoot(renderIn).render(
      <StyleSheetManager target={shadow as unknown as HTMLElement}>
        <React.StrictMode>
          <Counter
            name={this.getAttribute("name")!}
            onCountUpdated={
              (window as any)[this.getAttribute("on-count-updated")!]
            }
          />
        </React.StrictMode>
      </StyleSheetManager>,
    );
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("counter-element", CounterElement);
