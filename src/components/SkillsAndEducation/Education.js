import Styles from "./Education.module.css";

const Education = props =>{
  return (
    <div className={Styles.educationCard}>
      <p className={Styles.institute}>{props.institute}</p>
      <p className={Styles.course}>{props.course}</p>
      <p className={Styles.department}>{props.department}</p>
      <p className={Styles.duration}>
        {props.start} - {props.end}
      </p>
    </div>
  );
}

export default Education;