import { useEffect, useState } from 'react'
import MyCard from '../MyCard/MyCard'
import './Main.css'

const Main = () => {
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters")
            .then(response => response.json())
            .then(data => setCharacters(data.items))
            .catch(error => console.log(error));
    }, []);


    return (
        <main>
            {
                characters.length > 0 ?
                    characters.map(item => (
                        <MyCard key={item.id} character={item}></MyCard>

                    ))
                    : <p> Cargando... </p>
            }
        </main>
    )
}

export default Main
