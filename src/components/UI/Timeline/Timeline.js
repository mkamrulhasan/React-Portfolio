import Styles from "./Timeline.module.css";
import Experience from "./Experience";

const Timeline= props=>{
  return (
    <div id={Styles.cdTimeline} className={Styles.timelineContainer}>
      {props.experiences.map((experience, i) => {
        return (
          <Experience
            comapany={experience.company}
            summary={experience.summary}
            start={experience.start}
            end={experience.end}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default Timeline;