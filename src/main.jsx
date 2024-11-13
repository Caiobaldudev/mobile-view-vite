import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/global.js";
import App from "./pages/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <GlobalStyles />
      <App />
      <GlobalStyles />
  </React.StrictMode>
);
