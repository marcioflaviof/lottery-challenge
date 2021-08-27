import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./providers/theme/Provider";

import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
