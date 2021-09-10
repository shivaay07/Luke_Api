import React , {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planet = (props) => {
    const [planet, setPlanet] = useState([]);
    // const [planame, setPlaname] = useState ('');
    // const [plaid, setPlaid] = useState('');

    const {planetId}  = useParams();

    useEffect (
        () => {
            axios.get('https://swapi.dev/api/planets/'+ planetId)
            .then(getResponse => {
                console.log(getResponse.data)
                setPlanet(getResponse.data)
            })
            .catch(
                (error) => {
                    console.log('Error', error)
                }
            )
        },[planetId]
    )
    return (
        <fieldset>
            {/* {JSON.stringify(planet)} */}
            <h1>{planet.name}</h1>
            <h3>Climate: {planet.climate}</h3>
            <h3>Terrain: {planet.terrain}</h3>
            <h3>Surface Water: {planet.surface_water?<span>true</span>:<span>false</span>}</h3>
            <h3>Population: {new Intl.NumberFormat().format(planet.population)}</h3>
        </fieldset>
    )
}

export default Planet
