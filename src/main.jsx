import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme appearance="light" accentColor="red" radius="large" scaling="90%">
      <App />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>
);
