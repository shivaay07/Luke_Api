import React from 'react'
import {useParams} from "react-router";

const Home = (props) => {
    const {greeting,textCol,backCol} = useParams();
    return (
        <fieldset>
            <legend>DutHome</legend>
            {isNaN(greeting)?
            <h3 style={{color:textCol,backgroundColor:backCol}}>The word is {greeting}</h3>
            :
            <h3>The number is {greeting}</h3>}
        </fieldset>
    )
}

export default Home
