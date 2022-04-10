import Styles from "./FlipCard.module.css";
import Btn from "./Btn";

const FlipCard= props =>{
  return (
    <div className={Styles.cardContainerOuter}>
      <div className={Styles.cardContainer}>
        <div className={`${Styles.card} ${Styles.portfolioCard}`}>
          <div className={Styles.front}>
            <img
              className={Styles.portfolioImg}
              src={props.project.projectImage}
              alt={props.project.projectName}
            />
          </div>
          <div className={Styles.back}>
            <div className={Styles.content}>
              <div className={Styles.main}>
                <h3 className={Styles.projectName}>
                  {props.project.projectName}
                </h3>
                <h5 className={Styles.projectType}>
                  {props.project.projectType}
                </h5>
                <p className={Styles.portfolioCardKey}>Project Details</p>
                <p className={Styles.projectDescription}>
                  {props.project.projectSummary}
                </p>

                <p className={Styles.portfolioCardKey}>Project Info</p>
                <p className={Styles.projectInfoDetails}>
                  <span className={`material-icons ${Styles.icon}`}>
                    person
                  </span>
                  <span className={Styles.key}>Client name:</span>
                  {props.project.clientName}
                </p>
                <p className={Styles.projectInfoDetails}>
                  <span className={`material-icons ${Styles.icon}`}>today</span>
                  <span className={Styles.key}>Date:</span>
                  {props.project.projectDate}
                </p>
                <p className={Styles.projectInfoDetails}>
                  <span className={`material-icons ${Styles.icon}`}>
                    local_offer
                  </span>
                  <span className={Styles.key}> Project Category:</span>
                  {props.project.projectCategory}
                </p>
                <Btn icon="visibility" classname="portfolioBtn" Link={props.project.projectLink}>
                  Visit
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;