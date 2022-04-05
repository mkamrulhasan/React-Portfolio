import Styles from "./About.module.css";
import Section from "../UI/Section";
import TwoColumn from "../UI/TwoColumn";
import Hemel from '../../images/hemel.jpg'
import Button from "../UI/Button";

const About = () => {
  return (
    <Section secTitle="Who am I.">
      <TwoColumn>
        <div className={Styles.summerySide}>
          <p>
            Hay, I am Kamrul Hasan Hemel . I am a freelance Web designer and
            front-end developer . I always like to uses modern technology . My first
            goal is my client's satisfaction and want to convert client's
            imagination into reality . I enjoy each aspect and love building
            sites from start to finish for clients all over the world. I'm
            available for remote work - if you would like to build something
            together.
          </p>
        </div>
        <div className={Styles.infoSide}>
          <div className={Styles.imgCover}>
            <div className={Styles.imgBorder}>
              <img src={Hemel} alt="Hemel"></img>
            </div>
          </div>
          <div className={Styles.cvBtnCover}>
            <div>
              <Button>Download CV</Button>
            </div>
          </div>
        </div>
      </TwoColumn>
    </Section>
  );
};

export default About;
