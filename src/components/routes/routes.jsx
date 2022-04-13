import {
  Routes,
  Route,
} from "react-router-dom";
import Accueil from "../accueil/accueil";
import Error404 from '../Error404/Error404'
import Description from '../description/description'


function Chemin() {
    return(
          <Routes>
            <Route path="/" element={<Accueil />}/>
            <Route path="/description/:idlogement" element={<Description />}/>
            <Route path="*" element={<Error404 />} />
          </Routes>
      );
}

export default Chemin