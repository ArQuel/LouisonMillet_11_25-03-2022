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
            <Route path="/description/">
              <Route path=":idlogement" element={<Description />}/>
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
      );
}

export default Chemin