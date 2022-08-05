import{Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Menu from './components/Menu';
import TechnoAdd from './components/TechnoAdd';
import TechnoList from './pages/TechnosList';

function App() {
  return (
    <div>
      <Menu />
      {/* en dessous, c'est l'équivalent du routeroutlet d'Angular */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<TechnoAdd/>}/>
        <Route path='/list' element={<TechnoList/>}/>
      </Routes>

    </div>
  );
}

export default App;
