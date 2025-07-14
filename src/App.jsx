import { useState } from "react";
import { Routes, Route } from "react-router";
import StartUpScreen from "./components/StartUpScreen";
import Imprint from "./components/Imprint";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartUpScreen />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>

      {/* Imprint link that stays at bottom */}
      <div className="imprint-link-container">
        <a href="/imprint" className="imprint-link">
          Imprint
        </a>
      </div>
    </>
  );
}

export default App;
