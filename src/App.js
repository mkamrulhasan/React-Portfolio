import React, { useState } from "react";
import './App.css';
import SideNav from './components/SideNav/SideNav';
import Header from './components/Header/Header';
import RightSide from './components/UI/RightSide';
import About from './components/About/About';
import SkillsAndEducation from "./components/SkillsAndEducation/SkillsAndEducation";
import Experience from "./components/Experience/Experiences";

const App= () => {
  const [skillsState, setSkillsState] = useState([
    {
      type: "Web",
      skills: [
        { title: "Html", rate: 5 },
        { title: "Css", rate: 5 },
      ],
    },
    {
      type: "Programming",
      skills: [
        { title: "Javascript", rate: 4 },
        { title: "C#", rate: 2 },
        { title: "Java", rate: 2 },
        { title: "Python", rate: 2 },
      ],
    },
    {
      type: "Library",
      skills: [
        { title: "React", rate: 4 },
        { title: "Vue", rate: 2 },
        { title: "Bootstrap", rate: 5 },
        { title: "Materialize Css", rate: 5 },
      ],
    },
    {
      type: "Ux/Ui",
      skills: [
        { title: "Figma", rate: 4 },
        { title: "Adobe Illustrator", rate: 2 },
        { title: "Adobe XD", rate: 3 },
      ],
    },
  ]);

  const [educationsState, setEducationState] = useState([
    {
      institute: "Harimohan Govt. High School",
      course: "SSC",
      department: "Science",
      start: "2010",
      end: "2015",
    },
    {
      institute: "Rajshahi Polytechnic Institute",
      course: "Diploma In Computer Technology",
      department: "Computer Technology",
      start: "2015",
      end: "2019",
    },
    {
      institute: "Udemy",
      course: "Coding, Data structure & Algorithm",
      start: "2015",
      end: "present",
    },
    {
      institute: "TreeHouse",
      course: "Web Development",
      start: "2018",
      end: "present",
    },
  ]);

  return (
    <div className="App">
      <SideNav />
      <RightSide>
        <Header />
        <About />
        <SkillsAndEducation educations={educationsState} skills={skillsState} />
        <Experience />
      </RightSide>
    </div>
  );
}

export default App;
