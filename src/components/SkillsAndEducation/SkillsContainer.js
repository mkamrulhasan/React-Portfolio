import Styles from "./SkillsContainer.module.css";
import Skill from "./Skill";

const SkillsContainer = (props) => {
  return (
    <div className={Styles.skillsWrapper}>
      <h4 className={Styles.category}>{props.skillsSet.type}</h4>
      {props.skillsSet.skills.map((skill, index)=>{
        return <Skill name={skill.title} rate={skill.rate} key={index} />;
      })}
      
      <Skill name="Html" rate="5" />
    </div>
  );
};

export default SkillsContainer;
