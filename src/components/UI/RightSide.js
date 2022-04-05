import Styles from './RightSide.module.css';

const RightSide= props =>{
    return <div className={Styles.rightSide}>{props.children}</div>
}

export default RightSide;