module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "<rootDir>/jest.setup.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
