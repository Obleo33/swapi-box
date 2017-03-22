import React from 'react';
import styles from './CardWrapper'
import People from '../People/People';
import Planets from '../Planets/Planets';

const toggleView = (data, view) => {
  switch(view){
    case 'people':
      return data.map(person => {
        return (
          <People name={person.name}
                  homeworld={person.homeworld}
                  species={person.species}
                  population={person.homeworld}/>
          )
        })
        break

      case 'planets':
        return data.map(planet => {
          return(
            <Planets name={planet.name}
                     terrain={planet.terrain}
                     population={planet.population}
                     climate={planet.climate}
                     residents={planet.residents}/>
            )
          })
          break
        case 'vehicles':
        console.log('vehicles')
        break
        default:
        console.log('hey')
      }
    }

const CardWrapper = ({ data, view }) => {
  if(!data){return null}

  return (
    <div className='card-wrapper'>
      {toggleView(data,view)}
    </div>
  )
}

export default CardWrapper;
