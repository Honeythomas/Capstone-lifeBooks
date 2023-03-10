import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { fontSize } from "@mui/system";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Benefits of learning through "Life Books"
          </span>
          <span>Welcome</span>

          <span>
            Reading researchers as far back as the 1960s have discussed what’s
            known as “the Matthew effectTrusted Source,” a term that refers to
            biblical verse Matthew 13:12: “Whoever has will be given more, and
            they will have an abundance. Whoever does not have, even what they
            have will be taken from them.” The Matthew effect sums up the idea
            that the rich get richer and the poor get poorer — a concept that
            applies as much to vocabulary as it does to money. Researchers have
            foundTrusted Source that students who read books regularly,
            beginning at a young age, gradually develop large vocabularies. And
            vocabulary size can influence many areas of your life, from scores
            on standardized tests to college admissions and job opportunities. A
            2019 poll conducted by Cengage showed that 69 percent of employers
            are looking to hire people with “soft” skills, like the ability to
            communicate effectively. Reading books is the best way to increase
            your exposure to new words, learned in context.
          </span>
        </div>

        <div className="i-icons">
          <img
            src={Github}
            alt="https://github.com/Honeythomas/Capstone-lifeCoach/settings/access?guidance_task="
          />

          <img
            src={LinkedIn}
            alt="https://www.linkedin.com/in/honey-thomas-35ab18206/"
          />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
      </div>
    </div>
  );
};

export default Intro;
