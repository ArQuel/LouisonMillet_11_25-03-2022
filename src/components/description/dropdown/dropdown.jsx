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

    const stylesAboutTitle = props.taille === 'about' ?  styles.aboutTitle : styles.title
    const stylesAboutDescription = props.taille === 'about' ? styles.aboutDescription : styles.description
    const stylesArrow = open ? styles.openArrow : styles.closeArrow

    return (
        <div>
            <div onClick={handleClick} className={stylesAboutTitle}>
            {title}
                <div>
                    <img src={arrow} className={stylesArrow}></img>
                </div>
            </div>
            {open ? <div className={stylesAboutDescription}>
            
                    {children}
                
            </div> : null}

        </div>
    )
}