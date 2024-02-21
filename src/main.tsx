import React from "react";
import ReactDOM from "react-dom/client";

import { Counter } from "./components/Counter";
import { HelloTag, HelloElement, HelloEvents } from "./components/hello";
import { litToReact } from "./lit-to-react";

const Hello = litToReact<HelloElement, HelloEvents>({
  tagName: HelloTag,
  elementClass: HelloElement,
  events: ["countUpdated"],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Counter
      name={"I am a React component"}
      onCountUpdated={(count) =>
        console.log(`Pure React: new count = ${count}`)
      }
    />
    <Hello
      name={"I am a Custom Element inside React"}
      onCountUpdated={(e) =>
        console.log(`CE from React: new count = ${e.detail.count}`)
      }
    />
  </React.StrictMode>,
);
