import background from '../accueil/Background.jpg'
import styles from '../accueil/accueil.module.css'
import datas from '../datas'

function Accueil() {

  return (
    <div>
      <div className={styles.banniere}>
        <img src={background} className={styles.banniere}></img>
      </div>
      <div className={styles.grid}>
        {Object.keys(datas).map((propriete) => (
          <div key={datas[propriete].id} className={styles.gridElt}>
            <img src={datas[propriete].cover} className={styles.pics}></img>
            <h2 className={styles.title}>{datas[propriete].title}</h2>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default Accueil