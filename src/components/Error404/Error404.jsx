import styles from '../Error404/Error404.module.css'

function Error404() {
    return (
      <div className={styles.CtnError}>
        <h1 className={styles.Error404}>404</h1>
        <p className={styles.ErrorText}>Oups ! La page que vous demandez n&apos;existe pas.</p>
        <p className={styles.ErrorRedirection}>Retourner sur la page d&apos;accueil</p>
      </div>
      
    );
  }

export default Error404