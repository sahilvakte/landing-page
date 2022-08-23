import {  Routes, Route } from "react-router-dom";
import Homescreen from './Containers/Homescreen/Homescreen';
import Contact from './Components/Contact/Contact';
import EbeautyPopularPick from './Components/EbeautyPopularPick/EbeautyPopularPick';


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Homescreen/>} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="products" element={<EbeautyPopularPick/>}/>
      </Routes>
  );
}

export default App;
