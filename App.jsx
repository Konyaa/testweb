import React from 'react';
import './App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from './navbar.jsx';
import Hero from './page 1 or sum';
import Footer from './footer';
import Mid from '../mid.jsx';
const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0b1e3d] to-[#112a4c] text-white font-sans relative overflow-hidden">
      <Navbar />
      <Hero />
      <Mid />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
}

export default App;