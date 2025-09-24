import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import MyCard from './Components/MyCard/MyCard'
import Footer from './Components/Footer/Footer'
import './App.css'
import MyAccordion from './Components/MyAccordion/MyAccordion'

function App() {
  /* 
  se define el useState
  const [nombreVariable, metodoCambiarVariable] = useState(valorInicial) 
  */
  const [nombre, setNombre] = useState("Cargando...")
  const [imagen, setImagen] = useState("Cargando...")
  const [especie, setEspecie] = useState("Cargando...")

  let personajes = [];

  function setValores(data){
    setNombre(data.name);
    setImagen(data.image);
    setEspecie(data.species);

    let p = {id: data.id, name: data.name, img: data.image, specie: data.species};
    personajes.push(p);
  }

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character/2")
    .then(response => response.json())
    .then(data => {
      setValores(data)
    })
    .catch(error => console.log(error))
    
  }, [])

  return (
    <>
      <Header />
      <main>
        <MyCard data={{ name: nombre, img: imagen, specie: especie}} />
        <MyCard data={{ name: nombre, img: imagen, specie: especie}} />
        <MyCard data={{ name: nombre, img: imagen, specie: especie}} />
        

        <MyAccordion data={{ title: "s" }} />
        <MyAccordion data={{ title: "Carro" }} />
        <MyAccordion data={{ title: "Carro" }} />
        <MyAccordion data={{ title: "Carro" }} />

      </main>
      <Footer />

    </>
  )
}

export default App
