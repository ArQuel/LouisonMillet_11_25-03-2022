import styles from '../stars rating/stars.module.css'

function stars(props) {
    console.log(props.stars)
    switch (props.stars) {
        case '1' : return <div>1</div>
        case '2' : return <div>2</div>
        case '3' : return <div>3</div>
        case '4' : return <div className={styles.starRatingsCss} title=".875"></div>
        case '5' : return <div>5</div>
    }

}

export default stars