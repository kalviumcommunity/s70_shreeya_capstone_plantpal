import React from "react";
import PlantCard from "../components/PlantCard"; 
import {Link} from 'react-router-dom';

const dummyPlants = [
  {
    id: 1,
    name: "Snake Plant",
    species: "Sansevieria",
    wateringFrequency: "Once a week",
    image: "https://images.unsplash.com/photo-1616628182504-6e3e1d0f71b0?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Spider Plant",
    species: "Chlorophytum",
    wateringFrequency: "Twice a week",
    image: "https://images.unsplash.com/photo-1598899134739-42e3b6e5c527?auto=format&fit=crop&w=400&q=80",
  },
];

const MyPlants = () => {
  return (
    <div className="min-h-screen bg-green-50 px-6 py-10">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">My Plants</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dummyPlants.map((plant,id) => (
          <Link to={`/plant/${plant.id}`}>
          <PlantCard
            key={plant.id}{...plant}
          />
          </Link>  
        ))}
      </div>
    </div>
  );
};

export default MyPlants;
