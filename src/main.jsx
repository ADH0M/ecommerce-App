import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LangProvider from "./Context/LangProvider.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./Store/Store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LangProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </LangProvider>
  </StrictMode>
);
