import Logo from '../navbar/logo.jpg'
import styles from './navbar.module.css'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link to='/'>
                <img src={Logo} className={styles.logo} alt="Logo Kasa"></img>
            </Link>
                <div className={styles.menu}>
                    <Link to='/'>
                        <a>Accueil</a>
                    </Link>
                    <Link to='/about'>
                        <a className={styles.apropos}>À Propos</a>
                    </Link>
                </div>

        </div>

    );
  }

export default Navbar