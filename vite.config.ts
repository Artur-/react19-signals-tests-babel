import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
      babel: {
        plugins: [
          [
            "module:@preact/signals-react-transform",
            {
              mode: "all",
            },
          ],
        ]
      },
    }),
  ],
});
