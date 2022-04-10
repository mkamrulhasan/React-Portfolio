import React, { useState } from "react";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import Header from "./components/Header/Header";
import RightSide from "./components/UI/RightSide";
import About from "./components/About/About";
import SkillsAndEducation from "./components/SkillsAndEducation/SkillsAndEducation";
import Experiences from "./components/Experience/Experiences";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [isNavActiveState, setNavActive] = useState(false);

  const isNavShowHandler = (value) => {
    setNavActive(value);
  };

  return (
    <div className="App">
      <SideNav navStatus={isNavActiveState} isNavShow={isNavShowHandler} />
      <RightSide>
        <Header isNavShow={isNavShowHandler} navStatus={isNavActiveState} />
        <About />
        <SkillsAndEducation />
        <Experiences />
        <Portfolio />
        <Contact />
      </RightSide>
    </div>
  );
};

export default App;
