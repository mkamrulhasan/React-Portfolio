import Styles from './Section.module.css';

const Section = (props) => {
  return (
  <section className={Styles.section}>
    <h1 className={Styles.title}>{props.secTitle}</h1>
    <div className={Styles.underline}><span></span></div>
    <div className={Styles.wrapper}>{props.children}</div>
  </section>)
}

export default Section;