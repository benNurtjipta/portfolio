import { useEffect, useRef, useState } from "react";
import AboutMe from "./AboutMe";
import Tech from "./Tech";

const StartUpScreen = () => {
  const [isBright, setIsBright] = useState(false);
  const [showPicture, setShowPicture] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const intervalRef = useRef(null);
  const aboutMeRef = useRef(null);
  const techRef = useRef(null);
  const mainSectionRef = useRef(null);

  const togglePicture = () => {
    setShowPicture(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const toggleBright = () => {
    return setIsBright(!isBright);
  };

  const toggleAbout = () => {
    setShowAbout(true);
    if (window.innerWidth <= 800 && aboutMeRef.current) {
      setTimeout(() => {
        aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleExpClick = () => {
    setShowExp(true);
    if (window.innerWidth <= 800 && techRef.current) {
      setTimeout(() => {
        techRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };
  const handleResetScrollTop = () => {
    setShowExp(false);
    setShowPicture(false);
    setShowAbout(false);
    startInterval();
    if (mainSectionRef.current) {
      mainSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
    <section ref={mainSectionRef} className="start-screen">
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
        ref={aboutMeRef}
        setShowExp={setShowExp}
        showExp={showExp}
        showAbout={showAbout}
        onExpClick={handleExpClick}
      />
      <Tech
        setShowAbout={setShowAbout}
        setShowPicture={setShowPicture}
        showAbout={showAbout}
        showPicture={showPicture}
        startInterval={startInterval}
        setShowExp={setShowExp}
        showExp={showExp}
        ref={techRef}
        onReset={handleResetScrollTop}
      />
    </section>
  );
};
export default StartUpScreen;
