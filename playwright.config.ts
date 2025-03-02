import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: ["**/*.e2e.ts"],
  timeout: 60000,
  fullyParallel: true,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    trace: "on",
  },
});
