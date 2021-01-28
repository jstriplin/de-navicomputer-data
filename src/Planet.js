import React from 'react';
import './Planet.css'

const Planet = ({name, population, climate, terrain}) => {
    return (
        <div className='planet-container'>
            <div className="planet-row">
                <div className="planet">
                    <h1 className='planet-name'>{name}</h1>
                </div>
                <div className="planet-data">
                    <p className="planet-population">Population: {population}</p>
                    <p className="planet-climate">Climate: {climate}</p>
                    <p className="planet-terrain">Terrain: {terrain}</p>
                </div>
            </div>
        </div>
    );
};

export default Planet;