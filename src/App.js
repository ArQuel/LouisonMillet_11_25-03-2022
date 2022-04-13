import Chemin from './components/routes/routes'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Chemin />
      <Footer />
    </BrowserRouter>

  );
}

export default App;
