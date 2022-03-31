import { useParams } from "react-router-dom"
import datas from '../datas'
import styles from '../description/description.module.css'
import Stars from './stars rating/stars'
import Host from './Host/host'
import Carousel from './carousel/carousel'

function Description(){
    const idlogement = useParams()
    const logement = datas.find(elt => elt.id === idlogement.idlogement)

    return (
        <div>
            <Carousel sliders={logement.pictures}></Carousel>
            <div className={styles.descElt}>
                <h1 className={styles.title}>{logement.title}</h1>
                <h2 className={styles.location}>{logement.location}</h2>
            </div>
                <div className={styles.tags}>
                    {logement.tags.map((tag) => (
                        <div key={tag} className={styles.tag}>{tag}</div>
                    ))}
                </div>

            <Host hostName={logement.host.name} hostPic={logement.host.picture}/>
            <Stars stars={logement.rating}/>
        </div>

	)
}


export default Description