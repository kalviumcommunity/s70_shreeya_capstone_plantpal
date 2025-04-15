import React from "react";

const PlantCard = ({name, species, image})=>{
    return(
        <div className="plant-card">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{species}</p>
        </div>
    )
}

export default PlantCard;