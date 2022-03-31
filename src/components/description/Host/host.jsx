import styles from './host.module.css'

function Host(props) {
    
    return (
        <div className={styles.author}>
           <p className={styles.name}>
           {props.hostName}
           </p> 
           <img src={props.hostPic} className={styles.profilPic} />
        </div>
    )

}

export default Host