import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

import './App.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import TechnoAdd from './components/TechnoAdd';
import TechnosList from './pages/TechnosList';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [technos, setTechnos] = useState([]);

  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  // La première fois que App component mount pour récupérer ce qu'il y a dans localStorage 
  useEffect(() => {
    setTechnos(storedTechnos);
  }, []);

  // A chaque rendu de TechnoList component 
  useEffect(() => {
    setStoredTechnos(technos);
  }, [technos]);


  function handleAddTechno(techno) {
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }
  function handleDeleteTechno(technoId) {
    setTechnos(technos.filter((techno) => techno.technoid !== technoId));
  }
  return (
    <div>
      <Menu />
      {/* en dessous, c'est l'équivalent du routeroutlet d'Angular */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<TechnoAdd handleAddTechno={handleAddTechno} />} />
        <Route path='/list' element={
          <TechnosList
            technos={technos}
            handleDeleteTechno={handleDeleteTechno} />
        } />
      </Routes>

    </div>
  );
}

export default App;
