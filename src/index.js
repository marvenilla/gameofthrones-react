import React from "react";
import ReactDOM from "react-dom/client";
import "./general.css"; // Correct path assuming it's directly under src
import "./style.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
