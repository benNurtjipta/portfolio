import { useEffect, useRef, useState } from "react";
import AboutMe from "./AboutMe";
import Tech from "./Tech";

const StartUpScreen = () => {
  const [isBright, setIsBright] = useState(false);
  const [showPicture, setShowPicture] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const intervalRef = useRef(null);

  const togglePicture = () => {
    setShowPicture((prev) => !prev);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const toggleBright = () => {
    return setIsBright(!isBright);
  };

  const toggleAbout = () => {
    return setShowAbout(!showAbout);
  };

  const startInterval = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setIsBright(Math.random() > 0.5);
    }, 100);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="start-screen">
      <div className="content-wrapper">
        <h1 className="tracking-in-expand">Ben Nurtjipta</h1>
        <h1 className="tracking-in-expand job-title">WEB DEVELOPER</h1>
        <div className="center-img">
          <div className="lightbulb-select"></div>
          <img
            className={isBright ? "bg-light-img" : "bg-start-img"}
            src="/assets/atari.png"
            alt=""
          />
          <div onClick={toggleBright} className="lightbulb-select"></div>
          <div onClick={togglePicture} className="select-area">
            <img
              className={`mein-bild${showPicture ? " monitor-on" : ""}`}
              src="/assets/icke.png"
              alt=""
            />
          </div>
          <div className="fill-black">
            <p className="start-text">START</p>
          </div>
        </div>
      </div>
      <button
        onClick={toggleAbout}
        className={`nav-button ${showPicture ? "fade-in" : "hidden"}`}
      >
        about me
      </button>
      <AboutMe
        setShowExp={setShowExp}
        showExp={showExp}
        showAbout={showAbout}
      />
      <Tech
        setShowExp={setShowExp}
        setShowAbout={setShowAbout}
        setShowPicture={setShowPicture}
        showExp={showExp}
        showAbout={showAbout}
        showPicture={showPicture}
        startInterval={startInterval}
      />
    </section>
  );
};
export default StartUpScreen;
