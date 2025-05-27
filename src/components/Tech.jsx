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
        apps.
      </p>
      <h4>PROJECTS</h4>
      <Projects />
      <button
        onClick={resetAll}
        className={`nav-button exp ${showExp ? "fade-in" : "hidden"}`}
      >
        reset
      </button>
    </aside>
  );
};
export default Tech;
