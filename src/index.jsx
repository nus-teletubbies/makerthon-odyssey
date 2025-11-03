import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Get basename from homepage URL (for GitHub Pages deployment)
// Extract pathname from PUBLIC_URL, default to '/' for local development
const publicUrl = process.env.PUBLIC_URL || '';
// PUBLIC_URL will be the full URL from homepage field, extract just the pathname
let basename = '/';
if (publicUrl) {
  try {
    // If it's a full URL, extract pathname
    if (publicUrl.startsWith('http')) {
      basename = new URL(publicUrl).pathname;
    } else {
      // If it's already just a path, use it directly
      basename = publicUrl;
    }
  } catch (e) {
    // Fallback if URL parsing fails
    basename = publicUrl.startsWith('/') ? publicUrl : '/' + publicUrl;
  }
}

ReactDOM.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
