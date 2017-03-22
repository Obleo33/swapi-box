import React from 'react';
import People from '../People/People'

const CardWrapper = ({ data }) => {
  if(!data){return null}
  return (
    <div className='card-wrapper'>
      {data.map(person => {
        return (
          <People name={person.name}
            homeworld={person.homeworld}
            species={person.species}
            population={person.homeworld}/>
          )
        })
      }
    </div>
  )
}

export default CardWrapper;
