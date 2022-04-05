import Styles from "./Timeline.module.css";
import Experience from "./Experience";

const Timeline= props=>{
  return (
    <div id={Styles.cdTimeline} className={Styles.timelineContainer}>
      <Experience
        comapany="DvrUnlimited"
        summary="jasdjb ajweh ejkakhdjja srar arhajrhjabfh aawjr agrjgr"
        start="2018"
        end="2020"
      />
      <Experience
        comapany="DvrUnlimited"
        summary="jasdjb ajweh ejkakhdjja srar arhajrhjabfh aawjr agrjgr"
        start="2018"
        end="2020"
      />
      <Experience
        comapany="DvrUnlimited"
        summary="jasdjb ajweh ejkakhdjja srar arhajrhjabfh aawjr agrjgr"
        start="2018"
        end="2020"
      />
    </div>
  );
}

export default Timeline;