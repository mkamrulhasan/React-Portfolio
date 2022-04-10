
import Styles from './Experience.module.css';

const Experience = (props) => {
  return (
    <div className={`${Styles.TimelineBlock} scrollAnimation`}>
      <div className={Styles.dots}></div>

      <div className={Styles.timelineContent}>
        <h2>{props.comapany}</h2>
        <p>{props.summary}</p>

        <span className={Styles.date}>
          {props.start} -- {props.end}
        </span>
      </div>
    </div>
  );
};

export default Experience;