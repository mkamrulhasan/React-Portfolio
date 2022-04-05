import Styles from "./SkillsAndEducation.module.css";
import Section from "../UI/Section";
import TwoColumn from "../UI/TwoColumn";
import Education from "./Education";
import SkillsContainer from "./SkillsContainer";

const SkillsAndEducation = (props) => {
  return (
    <Section secTitle="What I know.">
      <TwoColumn>
        <div>
          <h3 className={Styles.subTitle}>My Education</h3>
          <div className={Styles.educationBlock}>
            {props.educations.map((education, i)=>{
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
          {props.skills.map((skillset, index)=>{
            return <SkillsContainer skillsSet={skillset} key={index} />;
          })}
          
        </div>
      </TwoColumn>
    </Section>
  );
};

export default SkillsAndEducation;
