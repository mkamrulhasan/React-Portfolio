import Styles from './SideNav.module.css';
import jslogo from '../../images/javascript.png'
const SideNav= ()=>{
    return(
        <div className={Styles.sidenav}>
            <img src={jslogo} className={Styles.jslogo} alt='Javascript'></img>

        </div>
    )
}

export default SideNav;