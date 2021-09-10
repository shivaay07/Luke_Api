import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams,Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import App from '../App'
import kenobi from './kenobi.jpg'

const People = (props) => {
    const [people, setPeople] = useState([]);
    const [peoplehome, setPeoplehome] = useState('');
    const [planetId, setPlanetId] = useState('');
    // const [name, setName] = useState('');
    // const [id, setId] = useState('');
    // const [selector, setSelector] = useState();
    const { idVar } = useParams();
    // const history = useHistory();

    useEffect(
        () => {
            axios.get('https://swapi.dev/api/people/' + idVar)
                .then(getRespone => {
                    console.log(getRespone.data)
                    setPeople(getRespone.data)

                })
                .catch(
                    (error) => {
                        setPeople(null)
                    }
                )
        }, [idVar]
    )
    
    useEffect(
        () => {
            people?
            
            axios.get(people.homeworld)
                .then(getRespone => {
                    console.log(getRespone.data)
                    setPeoplehome(getRespone.data.name)
                    console.log(`this is people.homeworld ${people.homeworld}`)
                    // converting the url to array
                    let arr = people.homeworld.split("/")
                    console.log(arr);
                    // set planet to arr where index is [arr.length-2]
                    setPlanetId(arr[arr.length-2])
                })
                .catch(
                    (error) => {
                        setPeople(null)
                    }
                ):
                console.log("Loading")
        }, [idVar]
    )
    let content = (
        <div>
            {people?
            <fieldset>
                {JSON.stringify(people.homeworld)}
                <legend>People.jsx</legend>
                    <h1>{people.name}</h1>
                    <h4><span style={{fontWeight:'bold'}}>Height:  </span>{people.height}</h4>
                    <h4><span style={{fontWeight:'bold'}}>Mass:  </span>{people.mass}</h4>
                    <h4><span style={{fontWeight:'bold'}}>Hair Color:  </span>{people.hair_color}</h4>
                    <h4><span style={{fontWeight:'bold'}}>Skin Color:  </span>{people.skin_color}</h4>
                    <h4><span style={{fontWeight:'bold'}}>Home World:  </span>{peoplehome}</h4>
                    <h4><Link to= {'/planets/'+planetId}>Homeworld</Link></h4>
            </fieldset>:
            <label htmlFor="img">No droids<img src={kenobi} alt='There arent droids'/></label>
            }
        </div>
    )
    // const handleSubmit = e =>{
    //     e.preventDefault()
    //     history.push(`/${name}/${id}`)

    // }

    return (
        <fieldset>
            {content}
        </fieldset>


    )
}



export default People
