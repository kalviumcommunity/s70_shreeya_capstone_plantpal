import React from 'react'
import './index.css'
// import PlantCard from './components/PlantCard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyPlants from './pages/MyPlants';
import Community from './pages/Community';
import Profile from './pages/Profile';
import PlantDetails from './pages/PlantDetails';
// import Features from './components/Features';
// import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
    
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path = '/signup' element ={<Signup/>}/>
          <Route path='/myplants' element={<MyPlants/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/plant/id' element = {<PlantDetails/>}/>
        </Routes>
    </div>
  );
};

export default App;
