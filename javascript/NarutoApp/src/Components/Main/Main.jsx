import {useState, useEffect} from 'react'
import './Main.css'
import CardCharacter from '../CardCharacter/CardCharacter'

const Main = () => {

    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        fetch("https://dattebayo-api.onrender.com/characters")
            .then(response => response.json())
            .then(data => setCharacters(data.characters))
            .catch(error => console.log(error));
    }, []);

    return (
        <main>
            <h2>Personajes</h2>
            <section>
                {
                    characters.length ===0 ? <p>Cargando...</p> :
                        characters.map(item => (
                            <CardCharacter key={item.id} character = {item}></CardCharacter>
                        ))
                }
            </section>
        </main>
    )
}

export default Main
