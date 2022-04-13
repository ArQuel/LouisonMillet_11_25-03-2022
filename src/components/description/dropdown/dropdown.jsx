import { useState } from "react"
import styles from './dropdown.module.css'
import arrow from './arrow.svg'

export default function Dropdown(props) {
    const [open, setOpen] = useState(false)
    const title = props.title
    const children = props.children

    const handleClick = () => {
        setOpen(oldOpen => {
            return !oldOpen
        })
    }
    const stylesArrow = open ? styles.openArrow : styles.closeArrow
    return (
        <div className={styles.dropdownCtn}>
            <div onClick={handleClick} className={styles.title}>
            {title}
                <div>
                    <img src={arrow} className={stylesArrow}></img>
                </div>
            </div>

            <div className={styles.description}>
                <p>
                    {open ? children : null}
                </p>
            </div>
        </div>
    )

}