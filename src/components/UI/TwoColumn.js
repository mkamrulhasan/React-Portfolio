import Styles from './TwoColumn.module.css';

const TwoColumn= props => {
  return (
    <div className={`${Styles.gridcolumn} ${Styles[props.className]}`}>
      {props.children}
    </div>
  );
}

export default TwoColumn;