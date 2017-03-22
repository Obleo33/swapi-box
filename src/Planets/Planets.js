import React from 'react';

const Planets = ({ planetsData }) => {
  if(!planetsData) {
    return null
  }

  const planetInfo = planetsData.map((key, i) => {
    return(
      <div key={i}>
        <p>Name:{key.name}</p>
        <p>Terrain:{key.terrain}</p>
        <p>Population:{key.population}</p>
        <p>Climate:{key.climate}</p>
        <p>Residents:{key.residents}</p>
        <button>Favorite</button>
      </div>
    )
  })
  return(
    <div>
      {planetInfo}
    </div>
  )
}


export default Planets;
