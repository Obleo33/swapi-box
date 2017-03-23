import React from 'react';
import styles from './CardWrapper'
import People from '../People/People';
import Planets from '../Planets/Planets';
import Vehicles from '../Vehicles/Vehicles';

const toggleView = (data, view, addToFavorites) => {
  switch(view){
    case 'people':
      return data.map((person, i) => {
        return (
          <People name={person.name}
                  homeworld={person.homeworld}
                  species={person.species}
                  population={person.homeworld}
                  index={'people'+i}
                  key={i}
                  addToFavorites={(props, type) => addToFavorites(props, type)}/>
          )
        })
        break

      case 'planets':
        return data.map((planet,i) => {
          return(
            <Planets name={planet.name}
                     terrain={planet.terrain}
                     population={planet.population}
                     climate={planet.climate}
                     residents={planet.residents}
                     index={'planets'+i}
                     key={i}
                     addToFavorites={(props, type) => addToFavorites(props, type)}/>
            )
          })
          break

        case 'vehicles':
          return data.map((vehicle, i) => {
            return(
              <Vehicles name={vehicle.name}
                        model={vehicle.model}
                        class={vehicle.vehicle_class}
                        passengers={vehicle.passengers}
                        index={'vehicles'+i}
                        key={i}
                        addToFavorites={(props, type) => addToFavorites(props, type)}/>
            )
          })
        break
        default:
      }
    }

const CardWrapper = ({ data, view, addToFavorites }) => {
  if(!data){return null}

  return (
    <div className='card-wrapper'>
      {toggleView(data, view, addToFavorites)}
    </div>
  )
}

export default CardWrapper;
