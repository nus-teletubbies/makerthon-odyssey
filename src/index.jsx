import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Get basename from homepage URL (for GitHub Pages deployment)
// Extract pathname from homepage, default to '/' for local development
const homepage = process.env.PUBLIC_URL || '';
const basename = homepage ? new URL(homepage).pathname : '/';

ReactDOM.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
