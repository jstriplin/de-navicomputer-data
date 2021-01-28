import "./App.css";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import Planet from "./Planet";

const url = 'https://swapi.dev/api/planets/?format=json'
// const url2 = [{
//     "climate": "Arid",
//     "diameter": "10465",
//     "gravity": "1 standard",
//     "name": "Tatooine",
//     "orbital_period": "304",
//     "population": "200000",
//     "residents": [
//         "https://swapi.dev/api/people/1/",
//         "https://swapi.dev/api/people/2/",
//     ],
//     "rotation_period": "23",
//     "surface_water": "1",
//     "terrain": "Desert",
//     "url": "https://swapi.dev/api/planets/1/"
// }]

function App() {
    const [planets, setPlanets] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get(url).then(res => {
            setPlanets(res.data.results)
            // console.log(res.data.results)
        }).catch(error  => alert(error))
    }, [])
    // useEffect(() => {
    //         setPlanets(url2)
    //     console.log(url2)
    // }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredPlanets = planets.filter(planet => planet.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="planet-app">
      <h1 className='title'>Welcome to the Navicomputer!</h1>
      <h2 className='caption'>Search for a planet</h2>
        <form>
            <input type='text'
            placeholder='Search'
            className='planet-search'
            onChange={handleChange}/>
        </form>
        {filteredPlanets.map(planet => {
            return (
                <Planet key={planet.name}
                        name={planet.name}
                        population={planet.population}
                        terrain={planet.terrain}
                        climate={planet.climate}
                />
            )
        })}
    </div>
  );
}

export default App;
