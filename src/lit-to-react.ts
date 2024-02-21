import { createComponent, type ReactWebComponent } from "@lit/react";
import React from "react";

type ToReact<K extends Record<string, any>> = {
  [key in `on${Capitalize<Extract<keyof K, string>>}`]: (
    e: CustomEvent<K[Extract<keyof K, string>]>,
  ) => void;
};
type EventDetails = Record<string, any>;

export function litToReact<
  I extends HTMLElement,
  const T extends { [eventName: string]: EventDetails },
>({
  tagName,
  elementClass,
  events,
}: {
  tagName: string;
  elementClass: { new (): I };
  events: Extract<keyof T, string>[];
}) {
  return createComponent({
    tagName,
    elementClass,
    react: React,
    events: events.reduce((acc, event) => {
      return {
        ...acc,
        [`on${capitalize(event)}`]: event,
      };
    }, {}),
  }) as ReactWebComponent<I, {}> | React.ForwardRefExoticComponent<ToReact<T>>;
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
