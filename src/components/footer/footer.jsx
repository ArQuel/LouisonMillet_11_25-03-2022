import footerK from '../footer/VectorK.png'
import footerH from '../footer/VectorH.png'
import footerS from '../footer/VectorS.png'
import footerA from '../footer/VectorA.png'
import styles from '../footer/footer.module.css'

function footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.kasa}>
                <img src={footerK}>
                </img>
                <img src={footerH}>
                </img>
                <img src={footerS}>
                </img>
                <img src={footerA}>
                </img>
            </div>
            <div className={styles.description}>   
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}

export default footer