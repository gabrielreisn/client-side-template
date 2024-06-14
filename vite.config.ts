import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(() => {
  const env = loadEnv("all", process.cwd());

  return {
    server: {
      port: parseInt(env.VITE_PORT ?? 3000),
    },
    build: {
      outDir: "public",
    },
    plugins: [react()],
    test: {
      environment: "jsdom",
      setupFiles: ["./tests/setup.ts"],
      testMatch: ["./tests/**/*.test.tsx"],
      globals: true,
    },
  };
});
