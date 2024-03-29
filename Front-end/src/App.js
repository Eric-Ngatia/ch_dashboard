import { Route, Routes } from 'react-router';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home';
import Connexion from './Components/Identification/Connexion';
import Inscription from './Components/Identification/Inscription';
import Quete from './Components/Quete';
import Historique from './Components/Historique';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Home' element={ <Home/> } />
        <Route path='/Inscription' element= { <Inscription/>} />
        <Route path='/Connexion' element= { <Connexion/> } />
        <Route path='/Quete' element={ <Quete/> } />
        <Route path='/Historique' element={ <Historique/> } />
        <Route path='/Navigation' element={ <Navigation/> } />
      </Routes>
    </div>
  );
}

export default App;
