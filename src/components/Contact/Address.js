import Styles from "./Address.module.css";
import Skype from '../../images/skype.png';
import Linkedin from '../../images/linkedin.png';

const Address = () => {
  return (
    <div className={Styles.contactInfo}>
      <div className={Styles.location}>
        <i className="material-icons">location_on</i>
        <p className={Styles.contLevel}>Address:</p>
        <p className={Styles.contVal}>Rajshahi , Bangladesh</p>
      </div>
      <div className={Styles.email}>
        <i className="material-icons">mail</i>
        <p className={Styles.contLevel}>Email:</p>
        <p className={Styles.contVal}>mkamrulhasanh@gmail.com</p>
      </div>
      <div className={Styles.phone}>
        <i className="material-icons">phone</i>
        <p className={Styles.contLevel}>Phone:</p>
        <p className={Styles.contVal}>+8801712413190</p>
      </div>
      <div className={Styles.skype}>
        <img src={Skype} alt="Skype" />
        <p className={Styles.contLevel}>Skype:</p>
        <p className={Styles.contVal}>live:mkamrulhasanh</p>
      </div>
      <div className={Styles.skype}>
        <img src={Linkedin} alt="Linkedin" />
        <p className={Styles.contLevel}>Linkedin:</p>
        <p className={Styles.contVal}>www.linkedin.com/in/mkhemel</p>
      </div>
    </div>
  );
};

export default Address;
