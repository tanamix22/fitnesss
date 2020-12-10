/* const element = document.createElement('h1')
element.innerText = 'frenass backup'
const container = document.getElementById('root')
container .appendChild(element) */

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firsName: 'Freenass',
  lastName: 'Backup',
  avatar: 'http://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}

function getName(user){
  return  `${user.firsName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
    return <h1>program, {getName(user)} </h1>
  } 
  return <h1> not Freenass </h1>
}

const name = 'Frenass'
const element = (
  <div>
    <h1>{getGreeting(user)} </h1>
    <img src={user.avatar} />
  </div>
)

const container = document.getElementById('root')

//ReactDOM.render(que ---, dode---)

ReactDOM.render(element, container)