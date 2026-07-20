import React from "react";

const PlantCard = ({ name, species, wateringFrequency, image, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="h-48 w-full object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-800">{name}</h3>
        <p className="text-green-700 text-sm italic">{species}</p>
        <p className="text-green-600 mt-2">💧 {wateringFrequency}</p>
        <button onClick={() => handleUpdate(plant._id)}
         className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>

        <button onClick={() => onDelete(plant.id)}
        className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
      </div>
    </div>
  );
};

export default PlantCard;
