import React, { useState } from "react";
import Styles from "./RightSide.module.css";

const RightSide = (props) => {

    const [backToTopState, setBackToTopState] = useState("false");

  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 200) {
      setBackToTopState("true");
    } else {
      setBackToTopState("false");
    }
  });

  const smoothScrollHandler = (e) => {
    e.preventDefault();
    document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={Styles.rightSide}>
      {props.children}
      <div
        className={Styles.backToTop}
        onClick={smoothScrollHandler}
        style={
          backToTopState === "true"
            ? { opacity: 1, visibility: "visible" }
            : { opacity: 0, visibility: "hidden" }
        }
      >
        Back To Top
      </div>
    </div>
  );
};

export default RightSide;
