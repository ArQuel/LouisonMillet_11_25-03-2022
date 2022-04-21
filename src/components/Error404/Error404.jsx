import styles from '../Error404/Error404.module.css'
import { Link } from 'react-router-dom';

function Error404() {
    return (<>
      <div className={styles.CtnError}>
        <h1 className={styles.Error404}>404</h1>
        <p className={styles.ErrorText}>Oups ! La page que vous demandez n&apos;existe pas.</p>
      </div>
        <Link to={`/`}>
        <p className={styles.ErrorRedirection}>Retourner sur la page d&apos;accueil</p>
        </Link>
      </>
    );
  }

export default Error404