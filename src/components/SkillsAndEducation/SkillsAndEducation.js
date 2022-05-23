import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Styles from "./SkillsAndEducation.module.css";
import Section from "../UI/Section";
import TwoColumn from "../UI/TwoColumn";
import Education from "./Education";
import SkillsContainer from "./SkillsContainer";

const SkillsAndEducation = () => {
   const fetchSkills = useHttp();
   const fetchEducations = useHttp();
   useEffect(() => {
     fetchEducations.requestHttp(
       "https://mkhemel-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/educations.json"
     );
     fetchSkills.requestHttp(
       "https://mkhemel-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/skills.json"
     );
   }, [fetchSkills, fetchEducations]);

  return (
    <Section secTitle="What I know." id='skillsAndEducation'>
      <TwoColumn>
        <div>
          <h3 className={Styles.subTitle}>My Education</h3>
          <div className={Styles.educationBlock}>
            {fetchEducations.data.map((education, i)=>{
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
          {fetchSkills.data.map((skillset, index)=>{
            return <SkillsContainer skillsSet={skillset} key={index} />;
          })}
          
        </div>
      </TwoColumn>
    </Section>
  );
};

export default SkillsAndEducation;
