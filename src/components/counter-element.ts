import r2wc from "@r2wc/react-to-web-component";
import { Counter } from "./Counter";

const CounterElement = r2wc(Counter, {
  props: {
    name: "string",
    onCountUpdated: "function",
  },
  shadow: "open",
});

customElements.define("counter-element", CounterElement);
