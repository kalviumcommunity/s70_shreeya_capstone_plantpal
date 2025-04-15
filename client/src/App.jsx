import React from 'react'
import './index.css'
import PlantCard from './components/PlantCard'
import Navbar from './components/Navbar';
import Home from './pages/Home';

// import Hero from './components/Hero';
// import Features from './components/Features';
// import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Home/>
      {/* <Hero />
      <Features />
      <Footer /> */}
    </div>
  );
};

export default App;
