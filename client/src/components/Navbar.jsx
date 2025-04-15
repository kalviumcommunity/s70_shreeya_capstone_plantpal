import React from "react";

const Navbar = () => {
    return (
      <nav className="p-4 flex justify-between items-center flex items-center space-x-*">
        <h1 className="text-2xl font-bold text-green-800">PlantPal</h1>
        <div className="space-x-4">
          <a href="#" className="text-green-700 hover:underline">Home</a>
          <a href="#" className="text-green-700 hover:underline">My Plants</a>
          <a href="#" className="text-green-700 hover:underline">Community</a>
          <a href="#" className="text-green-700 hover:underline">Login</a>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Sign-up</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  