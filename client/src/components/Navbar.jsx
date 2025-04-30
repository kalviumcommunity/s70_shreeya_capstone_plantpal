import React from "react";
import {useNavigate} from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  
    return (
      <nav className="p-4 flex justify-between items-center flex items-center space-x-*">
        <a href="/" className="text-2xl font-bold text-green-800">PlantPal</a>
        <div className="space-x-4">
          <a href="/" className="text-green-700 hover:underline">Home</a>
          <a href="/myplants" className="text-green-700 hover:underline">My Plants</a>
          <a href="/community" className="text-green-700 hover:underline">Community</a>
          <a href="/profile" className="text-green-700 hover:underline">Profile</a>
          <a href="/login" className="text-green-700 hover:underline">Login</a>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" 
          onClick={()=>navigate('/signup')}>Sign-up</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  