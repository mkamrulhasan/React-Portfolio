import Styles from "./Btn.module.css";

const Btn = props =>{
  const classContainer= props.classname;
  return (
    <button className={`${Styles.btn} ${Styles[classContainer]}`} type={props.type}>
      {props.children} <span className="material-icons">{props.icon}</span>
    </button>
  );
}

export default Btn;