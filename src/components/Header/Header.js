import Styles from './Header.module.css';

const Header = () =>{
    return(
        <header className={Styles.header}>
            <div className={Styles.cover}></div>
            <div className={Styles.innerText}>
                <h2>M. Kamrul Hasan Hemel</h2>
                <h1>Front-End<br /><span data-text='Developer'>Developer</span></h1>
            </div>

        </header>
    )
}

export default Header;