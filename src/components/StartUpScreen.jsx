import { useEffect, useState } from "react";

const StartUpScreen = () => {
  const [isBright, setIsBright] = useState(false);
  const [showPicture, setShowPicture] = useState(false);
  const togglePicture = () => {
    setShowPicture((prev) => !prev);
  };
  const toggleBright = () => {
    return setIsBright(!isBright);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBright(Math.random() > 0.5);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="start-screen">
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
    </section>
  );
};
export default StartUpScreen;
