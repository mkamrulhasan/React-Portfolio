import Styles from "./Button.module.css";
import CV from "../../images/Hemel-cv.jpg";

const Button = props =>{
  return (
    <a className={Styles.btn} href={CV}>
      {props.children} <span class="material-icons">download</span>
    </a>
  );
}

export default Button;