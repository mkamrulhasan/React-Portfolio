import Styles from './SideNav.module.css';
import jslogo from '../../images/javascript.png'
const SideNav= (props)=>{
  const smoothScrollHandler= (e) =>{
    e.preventDefault();
    if (e.target.classList.contains("navLink")) {
      props.isNavShow(false);
      document
        .querySelector(`${e.target.getAttribute("href")}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  }
    return (
      <div
        className={Styles.sidenav}
        style={
          props.navStatus === true
            ? { opacity: 1, visibility: "visible" }
            : { opacity: 0, visibility: "hidden" }
        }
      >
        <img src={jslogo} className={Styles.jslogo} alt="Javascript"></img>
        <nav onClick={smoothScrollHandler} className={Styles.menu}>
          <a className="navLink" href="#about">
            About Me
          </a>
          <a className="navLink" href="#skillsAndEducation">
            Skills & Education
          </a>
          <a className="navLink" href="#experiences">
            Experience
          </a>
          <a className="navLink" href="#portfolio">
            Portfolio
          </a>
          <a className="navLink" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    );
}

export default SideNav;