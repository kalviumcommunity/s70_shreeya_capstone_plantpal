import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="p-8">
     <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 bg-green-50">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl font-bold text-green-800">
        Welcome to PlantPal 🌱
        </h1>
        <p className="text-green-700 text-lg">
        Track your plants. Join the community. Grow together.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700" onClick={()=>navigate('/signup')}>
            Get Started
          </button>
          <button className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-100">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1592722294225-cd563dd08bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="PlantPal Hero"
          className="w-250 h-100 object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
    
      <section className="text-left mb-12 ">
        {/* <h1 className="text-4xl font-bold text-green-800 mb-4">Welcome to PlantPal 🌱</h1>
        <p className="text-gray-600 text-lg">Track your plants. Join the community. Grow together.</p> */}
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-green-50 p-6 rounded shadow">
          <h2 className="font-bold text-xl mb-2">Track Growth</h2>
          <p>Keep logs and reminders for each plant.</p>
        </div>
        <div className="bg-green-50 p-6 rounded shadow">
          <h2 className="font-bold text-xl mb-2">Join the Community</h2>
          <p>Connect with other plant lovers.</p>
        </div>
        <div className="bg-green-50 p-6 rounded shadow">
          <h2 className="font-bold text-xl mb-2">AI Plant Tips</h2>
          <p>Use smart suggestions for care & watering.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
