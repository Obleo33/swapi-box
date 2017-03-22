const People = [];
const Planets = [];
const Vehicles = [];


const fetchData = (call) => {
  fetch(call)
  .then(response => response.json())
  .then(json => processData(json))
}

const processData = (json) => {
  dataCleaner(json.results)
}

fetchData('https://swapi.co/api/people')

const dataCleaner = (data) => {
  data.map(person => {
    const homeworld = fetchData(person.homeworld)
    const population = homeworld.population
    const species = fetchData(person.species)
    People.push({
      name: person.name,
      homeworld: homeworld,
      species:species,
      population: homeworld.population ,
    })
  })
  console.log(People)


}

export default dataCleaner

// //fetch Planets
//
//   Planets({
//     name: ,
//     terrain: ,
//     population: ,
//     climate: ,
//     residets: fetch,
//   })
//
//   Vehicles({
//     name: ,
//     model: ,
//     class: ,
//     passengers: ,
//   })
//
