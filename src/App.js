import React from 'react';
import './App.css';
import Navbar from './navbar/index';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import Registration from './pages/registration';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/registration' element={<Registration />} />
      </Routes>  
    </Router>
  );
}

export default App;
