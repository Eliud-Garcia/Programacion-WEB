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
  const [personajes, setPersonajes] = useState(null)


  function setValores(data) {
    setPersonajes(data.results)
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
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
        {
          personajes != null ?
            personajes.map((item) => (
              <MyCard key={item.id} data={item} />
            ))
            : <p>cargando</p>
        }        
      </main>
      <Footer />

    </>
      )
}

      export default App
