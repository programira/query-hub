import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { act } from "react"; 

afterEach(() => {
  act(() => {
    cleanup();
  });
});

// Manually extend Jest matchers for TypeScript
declare global {
    namespace jest {
      interface Matchers<R> {
        toBeInTheDocument(): R;
      }
    }
  }

const consoleWarn = console.warn;
const consoleError = console.error;

beforeAll(() => {
  console.warn = jest.fn();
  console.error = jest.fn();
});

afterAll(() => {
  console.warn = consoleWarn;
  console.error = consoleError;
});