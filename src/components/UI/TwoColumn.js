import Styles from './TwoColumn.module.css';

const TwoColumn= props => {
  return <div className={Styles.gridcolumn}>{props.children}</div>
}

export default TwoColumn;