import { defineConfig } from "vite-plus";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

const config = defineConfig({
  staged: {
    "{src,public,docs}/**/*.{ts,tsx,js,jsx,css,md,html,json}": "vp check --fix",
    "{vite.config.ts,package.json,tsconfig.json,components.json,README.md,AGENTS.md}":
      "vp check --fix",
  },
  fmt: { ignorePatterns: ["**/routeTree.gen.ts"] },
  lint: { options: { typeAware: true, typeCheck: true } },
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({ prerender: { enabled: true } }),
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
});

export default config;
