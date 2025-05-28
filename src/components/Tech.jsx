import Projects from "./Projects";

const Tech = ({
  setShowExp,
  setShowPicture,
  setShowAbout,
  showPicture,
  showAbout,
  showExp,
  startInterval,
}) => {
  const resetAll = () => {
    setShowExp(!showExp);
    setShowPicture(!showPicture);
    setShowAbout(!showAbout);
    startInterval();
  };

  return (
    <aside
      className={`left-aside ${showExp ? "fade-in-about" : "hidden-about"}`}
    >
      <h4>STACK</h4>
      <p>
        I create web applications with HTML, CSS, JavaScript, and React. On the
        backend side, I work with Node.js and Express, and manage my code using
        Git. Recently, I’ve also started exploring React Native to build mobile
        apps. <br />
        Whatever the project needs, I’m quick to adapt.
      </p>
      <h4>PROJECTS</h4>
      <Projects />
      <div className="double-buttons exp">
        <button
          onClick={resetAll}
          className={`nav-button  ${showExp ? "fade-in" : "hidden"}`}
        >
          reset
        </button>
        <a
          href="/cv.pdf"
          download="Ben_Nurtjipta_CV.pdf"
          className={`nav-button ${showExp ? "fade-in" : "hidden"}`}
        >
          cv
        </a>
      </div>
    </aside>
  );
};
export default Tech;
