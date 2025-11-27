import Projects from "./Projects";
import React, { forwardRef } from "react";

const Tech = forwardRef(
  (
    {
      setShowExp,
      setShowPicture,
      setShowAbout,
      showPicture,
      showAbout,
      showExp,
      startInterval,
      onReset,
      isFading,
    },
    ref
  ) => {
    return (
      <div
        className={`outer ${showExp ? "outer-rim" : ""} 
          ${!showExp && isFading ? "outer-rim-fade" : ""} ${
          !showExp && !isFading ? "outer-rim-coll" : ""
        }`}
        ref={ref}
      >
        <aside
          ref={ref}
          className={`left-aside ${showExp ? "fade-in-about" : ""} 
          ${!showExp && isFading ? "fade-out-about" : ""} ${
            !showExp && !isFading ? "hidden-about" : ""
          }`}
        >
          <h4>STACK</h4>
          <p>
            I create web applications with HTML, CSS, JavaScript, and React. On
            the backend side, I work with Node.js and Express, and manage my
            code using Git. Recently, I’ve also started exploring React Native
            to build mobile apps. <br />
            Whatever the project needs, I’m quick to adapt.
          </p>
          <h4>PROJECTS</h4>
          <Projects />
          <div className="double-buttons exp">
            <button
              onClick={onReset}
              className={`nav-button  ${showExp ? "fade-in" : "hidden"}`}
            >
              reset
            </button>
            
          </div>
        </aside>
      </div>
    );
  }
);
export default Tech;
