# 📚 Query Hub

A **React-based Question List Application** built with **Vite**, **MUI**, and **TypeScript**.  
Includes **Playwright for E2E testing** and **React Testing Library for unit testing**.

---

## 🚀 Features
- ✅ **Fast Development**: Powered by **Vite**.
- 🎨 **Modern UI**: Styled with **MUI** (Material UI).
- 🧪 **Comprehensive Testing**:
  - **Unit & Integration Tests** → React Testing Library
  - **End-to-End (E2E) Tests** → Playwright
- ⚡ **Optimized Performance**: Uses `pnpm` for package management.

---

## 📂 Project Setup

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/programira/query-hub.git
cd query-hub
```

### 2️⃣ **Install Dependencies** (using `pnpm`)
```sh
pnpm install
```

### 3️⃣ **Start the Development Server**
```sh
pnpm dev
```
🔹 Runs the app at **`http://localhost:5174/`** (default Vite port).  

---

## 📦 **Available Scripts**
| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server (Vite) |
| `pnpm test` | Run **unit & integration tests** (React Testing Library + Jest) |
| `pnpm playwright test` | Run **end-to-end tests** using Playwright |
| `pnpm playwright show-report` | Run last HTML report |
| `pnpm storybook` | Start **Storybook** for component testing |

---

## 🎨 **Styling**
- Uses **MUI (Material UI)** for components.
- Global styles in `styles.scss`.

---

## 🧪 **Testing**
### ✅ **Unit & Integration Tests**
We use **React Testing Library** with Jest.
```sh
pnpm test
```
- **Tests are inside** `src/tests/`
- **Runs automatically in CI/CD**

### ✅ **End-to-End (E2E) Tests**
We use **Playwright** for full browser automation.
```sh
pnpm playwright test
```

---

## 📘 **Storybook for UI Testing**
Storybook is set up to test individual components.
```sh
pnpm storybook
```
- Opens at **`http://localhost:6006/`**
- Useful for **design system validation**.

---

## 📜 **Playwright Test Report**
After running E2E tests, open the report:
```sh
pnpm playwright show-report
```
- Generates a **visual test report**.
- Includes **screenshots and video recordings**.
- Opens at **`http://localhost:9323/`**

---

## 🔧 **Tech Stack**
| Tech | Purpose |
|------|---------|
| **Vite** | Fast build tool for React |
| **React + TypeScript** | Frontend framework |
| **MUI (Material UI)** | UI components |
| **pnpm** | Efficient package management |
| **React Testing Library** | Unit & integration testing |
| **Playwright** | E2E browser testing |
| **Storybook** | Component testing |

---

## 📄 **License**
MIT License © 2025 **Mirjana Milosevic**

---
