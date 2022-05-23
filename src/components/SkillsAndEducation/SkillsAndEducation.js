import React, {useState, useEffect, useCallback} from "react";
import Styles from "./SkillsAndEducation.module.css";
import Section from "../UI/Section";
import TwoColumn from "../UI/TwoColumn";
import Education from "./Education";
import SkillsContainer from "./SkillsContainer";

const SkillsAndEducation = () => {

  const [educationsState, setEducationState] = useState([]);
  const [skillsState, setSkillsState] = useState([]);

  const fetchEducationsHandler = useCallback(async () => {
      const response = await fetch(
        "https://mkhemel-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/educations.json"
      );
      const data = await response.json();
      setEducationState(data);
  }, []);

  const fetchSkillsHandler = useCallback(async () => {
    const response = await fetch(
      "https://mkhemel-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/skills.json"
    );
    const data = await response.json();
    setSkillsState(data);
  }, []);

  useEffect(() => {
    fetchEducationsHandler();
    fetchSkillsHandler();
  }, [fetchEducationsHandler,fetchSkillsHandler]);  

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
