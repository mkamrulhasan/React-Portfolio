import React, {useState} from "react";
import Styles from "./SkillsAndEducation.module.css";
import Section from "../UI/Section";
import TwoColumn from "../UI/TwoColumn";
import Education from "./Education";
import SkillsContainer from "./SkillsContainer";

const SkillsAndEducation = () => {

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
    <Section secTitle="What I know." id='skillsAndEducation'>
      <TwoColumn>
        <div>
          <h3 className={Styles.subTitle}>My Education</h3>
          <div className={Styles.educationBlock}>
            {educationsState.map((education, i)=>{
              return (
                <Education
                  institute={education.institute}
                  course={education.course}
                  department={education.department}
                  start={education.start}
                  end={education.end}
                  key={i}
                 />
              );
            })}
            
          </div>
        </div>
        <div className={Styles.skillsBlock}>
          <h3 className={Styles.subTitle}>My Skills</h3>
          {skillsState.map((skillset, index)=>{
            return <SkillsContainer skillsSet={skillset} key={index} />;
          })}
          
        </div>
      </TwoColumn>
    </Section>
  );
};

export default SkillsAndEducation;
