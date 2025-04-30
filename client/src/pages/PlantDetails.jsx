import React from "react";
import { useParams } from "react-router-dom";

const dummyPlant = {
  id: 1,
  name: "Snake Plant",
  species: "Sansevieria trifasciata",
  image: "https://images.unsplash.com/photo-1616628182504-6e3e1d0f71b0?auto=format&fit=crop&w=400&q=80",
  wateringFrequency: "Once a week",
  lastWatered: "April 20, 2025",
  notes: "Thrives in low light. Be careful not to overwater.",
};

const PlantDetail = () => {
  const { id } = useParams(); // You'll use this once you connect to real data
  const plant = dummyPlant; // In future: fetch based on `id`

  return (
    <div className="min-h-screen bg-green-50 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            {plant.name}
          </h2>
          <p className="text-green-600 italic mb-4">{plant.species}</p>
          <div className="space-y-2 text-green-700">
            <p>💧 Watering Frequency: {plant.wateringFrequency}</p>
            <p>📅 Last Watered: {plant.lastWatered}</p>
            <p className="mt-4">📝 Notes: {plant.notes}</p>
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Edit
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetail;
