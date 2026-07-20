import React from "react";
import {Link, useNavigate} from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  
    return (
      <nav className="p-4 flex justify-between items-center flex items-center space-x-*">
        <Link to="/" className="text-2xl font-bold text-green-800">PlantPal</Link>
        <div className="space-x-4">
          <Link to="/" className="text-green-700 hover:underline">Home</Link>
          <Link to="/myplants" className="text-green-700 hover:underline">My Plants</Link>
          <Link to="/community" className="text-green-700 hover:underline">Community</Link>
          <Link to="/profile" className="text-green-700 hover:underline">Profile</Link>
          <Link to="/login" className="text-green-700 hover:underline">Login</Link>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" 
          onClick={()=>navigate('/signup')}>Sign-up</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  