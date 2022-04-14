import {
  Routes,
  Route,
} from "react-router-dom";
import Accueil from "../accueil/accueil";
import Error404 from '../Error404/Error404'
import Description from '../description/description'
import About from '../about/about'


function Chemin() {
    return(
          <Routes>
            <Route path="/" element={<Accueil />}/>
            <Route path="/description/:idlogement" element={<Description />}/>
            <Route path="*" element={<Error404 />} />
            <Route path="/about" element={<About />} />
          </Routes>
      );
}

export default Chemin