import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Gaschart from './components/Gaschart';

function App() {
  return (
    <div className=''>
   
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/home" element={<Home />} />
     <Route path="/analysis" element={<Gaschart />} />
     </Routes>
      
    </div>
  );
}

export default App;
