import { Navigate, useParams } from "react-router-dom"
//import { useEffect, useState } from "react"
import datas from '../datas'
import styles from '../description/description.module.css'
import Stars from './stars rating/stars'
import Host from './Host/host'
import Carousel from './carousel/carousel'
import Dropdown from './dropdown/dropdown'

function Description(){
    const idlogement = useParams()
   // const navigate = useNavigate()
    //const [logement, setLogement] = useState(undefined)
    const logement = datas.find(elt => elt.id === idlogement.idlogement)
    if(logement === undefined){
        return <Navigate replace to="/404" />
    }
    /*
    useEffect(() => {
        const lodge = datas.find(elt => elt.id === idlogement.idlogement)
        console.log("testttt")
        if (lodge === undefined) {
            return navigate('/404')
        } else {
            setLogement({...lodge})
        }
    }, []) */

    return (
        <div>
            <Carousel sliders={logement.pictures} ></Carousel>
            <div className={styles.ctn}>
                <div className={styles.descElt}>
                    <h1 className={styles.title}>{logement.title}</h1>
                    <h2 className={styles.location}>{logement.location}</h2>
                </div>
                <div className={styles.host}>
                    <Host hostName={logement.host.name} hostPic={logement.host.picture}/>
                    <Stars stars={logement.rating}/>
                </div>  
            </div>
                <div className={styles.tags}>
                    {logement.tags.map((tag) => (
                        <div key={tag} className={styles.tag}>{tag}</div>
                    ))}
                </div>
            <div className={styles.dropdown}>
                <Dropdown title='Description'>
                        <p>{logement.description}</p>
                </Dropdown>
                <Dropdown title='Equipements'>
                        <ul>
                         {logement.equipments.map((elt) => (
                             <li key={elt}>{elt}</li>
                         ))}
                        </ul>
                </Dropdown>
            </div>

        </div>

	)
}


export default Description