import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Styles from "./SkillsAndEducation.module.css";
import Section from "../UI/Section";
import TwoColumn from "../UI/TwoColumn";
import Education from "./Education";
import SkillsContainer from "./SkillsContainer";

const SkillsAndEducation = () => {
    const { data: fetchSkillsData, requestHttp: fetchSkills } = useHttp();
    const { data:fetchEducationsData, requestHttp: fetchEducations } = useHttp();
   useEffect(() => {
     fetchEducations(
       "https://mkhemel-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/educations.json"
     );
     fetchSkills(
       "https://mkhemel-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/skills.json"
     );
   }, [fetchSkills, fetchEducations]);

  return (
    <Section secTitle="What I know." id='skillsAndEducation'>
      <TwoColumn>
        <div>
          <h3 className={Styles.subTitle}>My Education</h3>
          <div className={Styles.educationBlock}>
            {fetchEducationsData.map((education, i)=>{
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
          {fetchSkillsData.map((skillset, index)=>{
            return <SkillsContainer skillsSet={skillset} key={index} />;
          })}
          
        </div>
      </TwoColumn>
    </Section>
  );
};

export default SkillsAndEducation;
