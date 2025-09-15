import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardTest from './components/CardTest/CardTest'
import ButtonTest from './components/ButtonTest/ButtonTest'



function App() {

  const array = [
    {id: 1, name: "eliud", description:"aaaaaa"},
    {id: 2, name: "carlos", description:"bbbbbbbbb"},
    {id: 3, name: "pedro", description:"cccccccccccc"},
    {id: 4, name: "juan", description:"dddddddddd"}
  ];

  return (
    <>
      
      <div className='container'>
        <h1>Hola Mundo</h1>
        <ButtonTest />

        {
          array.map( (item) => (
            <CardTest key={item.id} data={item}/>
          ))
        }
      </div>
      
    </>
  )
}

export default App
