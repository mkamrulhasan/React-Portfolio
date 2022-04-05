import Styles from "./Skill.module.css";

const Skill = (props) => {
  return (
    <div className={Styles.skillCover}>
      <p className={Styles.skillName}>{props.name}</p>
      <div className={Styles.ratedbox}>
        {[...Array(Number(props.rate))].map((arr, i) => {
          return <div className={`${Styles.yellowRate} ${Styles.rate}`}></div>;
        })}

        {[...Array(5 - Number(props.rate))].map((arr, i) => {
          return <div className={`${Styles.emptyRate} ${Styles.rate}`}></div>;
        })}
      </div>
    </div>
  );
};

export default Skill;
