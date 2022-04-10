import Styles from "./Btn.module.css";

const Btn = props =>{
  const classContainer= props.classname;
  return (
    <a
      className={`${Styles.btn} ${Styles[classContainer]}`}
      href={props.Link}
      target="_blank" rel="noreferrer"
    >
      {props.children} <span className="material-icons">{props.icon}</span>
    </a>
  );
}

export default Btn;