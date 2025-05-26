import { useState } from "react";
import { Routes, Route } from "react-router";
import StartUpScreen from "./components/StartUpScreen";

function App() {
  const [showStartScreen, setShowStartScreen] = useState(true);
  return (
    <>
      {showStartScreen ? (
        <StartUpScreen />
      ) : (
        <section>
          <Routes>
            <Route path="/" element={<Landingpage />} />
          </Routes>
        </section>
      )}
    </>
  );
}

export default App;
