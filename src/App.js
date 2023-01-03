import Navbar from './Components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Info from './Components/routes/Info'
import Chronicles from './Components/routes/Chronicles'
import Contact from './Components/routes/Contact'
import Home from './Components/routes/Home'
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/chronicles' element={<Chronicles />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
