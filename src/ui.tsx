import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";

import "./scripts/checkfont";

const initFigmaUI = () => {
  const root = createRoot(document.getElementById("react-page")!);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

initFigmaUI();
