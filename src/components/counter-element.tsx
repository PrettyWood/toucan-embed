import { Counter } from "./Counter";
import r2wc from "../react-to-web-component";

const CounterElement = r2wc(Counter, {
  props: {
    name: "string",
    onCountUpdated: "function",
  },
  shadow: "open",
});

customElements.define("counter-element", CounterElement);
