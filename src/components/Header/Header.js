import Styles from "./Header.module.css";

const Header = (props) => {
    const navToggleHandler= (e) =>{
      props.isNavShow(e.target.checked);
    }

     return (
       <header className={`${Styles.header} header`}>
         <div className={Styles.cover}></div>
         <input
           type="checkbox"
           className={Styles.toggler}
           onClick={navToggleHandler}
           checked={props.navStatus===true}
         />
         <div className={Styles.hamberger}>
           <div></div>
         </div>
         <div className={Styles.innerText}>
           <h2>M. Kamrul Hasan Hemel</h2>
           <h1>
             Front-End
             <br />
             <span data-text="Developer">Developer</span>
           </h1>
         </div>
       </header>
     );
};

export default Header;
