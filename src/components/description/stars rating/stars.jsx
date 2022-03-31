import fullstar from './fullstar.png'
import emptystar from './emptystar.png'
import styles from './stars.module.css'

function stars(props) {

    let tableau = ["1","2","3","4","5"]

    return (
        <div className={styles.stars}>
            {tableau.map((index) => (
                index <= props.stars ? <img key={`starFull-${index}`} src={fullstar}></img> : <img key={`starEmpty-${index}`} src={emptystar}></img>
            ))}
        </div>
    )
}

export default stars