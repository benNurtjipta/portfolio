import React, { forwardRef } from "react";

const AboutMe = forwardRef(({ showAbout, onExpClick }, ref) => {
  return (
    <aside
      ref={ref}
      className={`right-aside ${showAbout ? "fade-in-about" : "hidden-about"}`}
    >
      <h4>ABOUT ME</h4>
      <p>
        Hi, I'm Ben — a web developer in the making. I’m finishing my studies at
        DCI Digital Career Institute (Nov 2025) and ready to take on new
        challenges.
      </p>
      <p>
        With a background in video editing and team leadership, I bring creative
        thinking, strong communication, and a collaborative mindset to the
        table.
      </p>
      <p>
        I'm passionate about music, curious about new tech, love good food, and
        always eager to learn something new.
      </p>

      <pre className="code-block">
        <code>
          <span className="const-span">const</span> contactMe = {"{\n"}
          {"  "}email:{" "}
          <a
            className={`${showAbout ? "fade-in" : "hidden"}`}
            href="mailto:b.nurtjipta@gmail.com"
          >
            "b.nurtjipta@gmail.com"
          </a>
          ,{"\n"}
          {"  "}github:{" "}
          <a
            className={`${showAbout ? "fade-in" : "hidden"}`}
            href="https://github.com/benNurtjipta"
            target="_blank"
          >
            "benNurtjipta"
          </a>
          ,{"\n"}
          {"  "}linkedin:{" "}
          <a
            className={`${showAbout ? "fade-in" : "hidden"}`}
            href="https://linkedin.com/in/ben-nurtjipta"
            target="_blank"
          >
            "ben-nurtjipta"
          </a>
          {"\n"}
          {"}"}
        </code>
      </pre>

      <button
        onClick={onExpClick}
        className={`nav-button exp ${showAbout ? "fade-in" : "hidden"}`}
      >
        experience
      </button>
    </aside>
  );
});
export default AboutMe;
