
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
const rootDir = path.join(__dirname, ".");
module.exports = {
  rootDir,
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.test.[jt]s?(x)"],
  transform: {
    "^.+\\.tsx?$": "esbuild-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/scripts/**",
    "!**/assets/**",
  ],
};