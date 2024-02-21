import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "toucan-embed",
    },
    rollupOptions: {
      external: ["lit"],
      output: {
        globals: {
          lit: "lit",
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    react({
      babel: {
        plugins: [
          ["@babel/plugin-syntax-decorators", { version: "2023-05" }],
          ["module:@preact/signals-react-transform"],
        ],
      },
    }),
  ],
});
