import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Accueil from "../accueil/accueil";
import Error404 from '../Error404/Error404'


function Chemin() {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />}/>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      );
}

export default Chemin