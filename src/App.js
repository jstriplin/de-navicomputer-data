import "./App.css";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import Planet from "./Planet";
import Chart from "./Chart";

const url = 'https://swapi.dev/api/planets/?format=json'

function App() {
    const [planets, setPlanets] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get(url).then(res => {
            setPlanets(res.data.results)
        }).catch(error  => alert(error))
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredPlanets = planets.filter(planet => planet.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="planet-app">
      <h1 className='planet-title'>Welcome to the Navicomputer!</h1>
      <h2 className='planet-caption'>Search for a planet</h2>
        <form>
            <input type='text'
            placeholder='Search'
            className='planet-search'
            onChange={handleChange}/>
        </form>
        <Chart data={planets}/>
        <div className="planet-header">
            <h3>POPULATION</h3>
            <h3>CLIMATE</h3>
            <h3>TERRAIN</h3>
        </div>
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
