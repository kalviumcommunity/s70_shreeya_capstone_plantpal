import React from 'react';

const Home = () => {
  return (
    <div className="p-8">
      {/* Hero Section */}
      <section className="text-left mb-12 ">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Welcome to PlantPal 🌱</h1>
        <p className="text-gray-600 text-lg">Track your plants. Join the community. Grow together.</p>
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