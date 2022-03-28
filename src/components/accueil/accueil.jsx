import background from '../accueil/Background.jpg'
import styles from '../accueil/accueil.module.css'
import datas from '../datas'
import { Link } from "react-router-dom"

function Accueil() {

  return (
    <div>
      <div className={styles.banniere}>
        <img src={background} className={styles.banniere}></img>
      </div>
      <div className={styles.grid}>
        {Object.keys(datas).map((logement) => (

          <div key={datas[logement].id} className={styles.gridElt}>
          <Link to={`/description/${datas[logement].id}`}>
            <img src={datas[logement].cover} className={styles.pics}></img>
            <h2 className={styles.title}>{datas[logement].title}</h2>
            </Link>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default Accueil