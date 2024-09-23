import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/Header";
import { ReactLenis } from "@studio-freight/react-lenis";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactLenis root>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </ReactLenis>
  </React.StrictMode>
);
