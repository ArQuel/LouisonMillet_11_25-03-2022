import { useParams } from "react-router-dom"
import datas from '../datas'
import styles from '../description/description.module.css'
import Stars from './stars rating/stars'

function Description(){
    const idlogement = useParams()
    // const trilogement = Object.entries(datas).filter(elt => elt.some(loc => loc.id === idlogement.idlogement))
    const trilogement = Object.entries(datas).find(elt => elt.some(loc => loc.id === idlogement.idlogement))
    const logement = trilogement.find(elt => elt.id === idlogement.idlogement)

    return (
        <div>
            <h1 className={styles.title}>{logement.title}</h1>
            <Stars stars={logement.rating}/>
        </div>

	)
}


export default Description