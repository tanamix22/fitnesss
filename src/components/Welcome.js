import React from 'react';
import './styles/Card.css'

function Welcome(props){
    return(
        <div className= "container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}!</h1>
                <p>let's workout to get someone gains!</p>
            </div>
        </div>
    )
}

export default Welcome;
