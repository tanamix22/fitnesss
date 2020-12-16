
import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/card'
import 'bootstrap/dist/css/bootstrap.css'
import Welcome from './components/Welcome'

const container = document.getElementById('root')

ReactDOM.render(<div>
                  <Welcome
                    username = "Frenass"
                  />
                  <Card 
                    title="Technique Guides 2"
                    description="Learn amazing street workout and calisthenics"
                    img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                    lefColor="#A74CF2"
                    rightColor="#617BFB"
                  />
                </div> , container)

