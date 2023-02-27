import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";

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
            Life coaching involves working with clients to help improve their
            quality of life through various emotions and actions. A Life Coach
            will be there to support a client throughout the coaching process
            until they feel they have reached the goals they have set in place.
            Life coaches will create a mentoring relationship in which clients
            feel confident and comfortable. There are three stages to mentoring
            relationships and the process it goes through to reach the end goal.
            Cultivation – This is where the mentee will learn from the
            experience of the mentor. Whilst this is happening the mentor is
            gathering knowledge and insights on the mentee to have a clear
            understanding of emerging issues. Separation – This stage would be
            the end of a relationship, however, challenges tend to arise at this
            point if one of the members is not ready to end the relationship.
            This may be because the mentee disagrees with the process the mentor
            thinks they have made. Redefinition – This is the point where the
            relationship reaches the same level after successfully working
            through the separation stage. This would mean both members feel
            confident and comfortable in the relationship ending.
          </span>
        </div>

        {/* social icons */}
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

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
