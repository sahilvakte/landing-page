import logo from './logo.svg';
// import './App.css';
import Enavbar from './Components/Enavbar/Enavbar'
import Homescreen from './Containers/Homescreen/Homescreen';
import Discover from './Components/Discover/Discover';
import Bestsellers from './Components/Bestsellers/Bestsellers';
import ProdDescription from './Components/ProdDescription/ProdDescription';
import Arrival from './Components/Arrival/Arrival';

function App() {
  return (
    <div className="App">
    <Enavbar/>
    <Homescreen/>
    <Discover/>
    <Bestsellers/>
    <ProdDescription/>
    <Arrival/>
    </div>
  );
}

export default App;
