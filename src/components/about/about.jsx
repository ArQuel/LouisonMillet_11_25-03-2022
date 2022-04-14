import Dropdown from '../description/dropdown/dropdown'
import styles from './about.module.css'
import background from './background.png'

function About () {
    return (
        <div>
            <div className={styles.banniereCtn}>
                <img src={background} className={styles.banniere}></img>
            </div>
            <div className={styles.aboutCtn}>
                <Dropdown title='Fiabilité' taille='about'>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </Dropdown>
                <Dropdown title='Respect' taille='about'>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Dropdown>
                <Dropdown title='Service' taille='about'>
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez la moindre question.
                </Dropdown>
                <Dropdown title='Sécurité' taille='about'>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Dropdown>
            </div>
        </div>
    )
}

export default About