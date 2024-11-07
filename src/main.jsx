/*
 *Node modules
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n.js";

/*
 * Components
 */
import App from "./App.jsx";

/*
 * CSS
 */
import "./index.css";
import "lenis/dist/lenis.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
