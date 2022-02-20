import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Hi, I'm SILAMBARASU</h1>
        <Typed
          className="typed-text"
          strings={[
            "Full Stack Developer",
            "Self Learner",
            "Team Player",
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
        <a href="#mainContact" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
