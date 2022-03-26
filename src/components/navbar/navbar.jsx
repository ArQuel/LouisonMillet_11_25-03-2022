import Logo from '../navbar/logo.jpg'
import styles from './navbar.module.css'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <img src={Logo} className={styles.logo} alt="Logo Kasa"></img>
            <div className={styles.menu}>
                <a>Accueil</a>
                <a className={styles.apropos}>À Propos</a>
            </div>
        </div>

    );
  }

export default Navbar