import React, {useState, useEffect} from 'react'
import Player from './Player'
import MapImage from './MapImage'

export default function Game({ lifePoints, character, setCharacter, handleRestart}) {

    const [map, setMap] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/maps/16")
        .then(response => response.json())
        .then(data => {setMap(data.map_image); setIsLoaded(true)})
      }, []);
      
      if(!isLoaded) return <h1>Loading...</h1>


    return (
        <div className="game-container">
            <div className="game" >
                <MapImage map={map} lifePoints={lifePoints} character={character} setCharacter={setCharacter}/>
                <Player character={character} setCharacter={setCharacter}/>
            </div>
            <div className="character-info">
                <h2>Kukulkan</h2>
                <h3>HP: {character.hp}</h3>
                <h3>Arrows: {character.ammo}</h3>
                <button onClick={handleRestart}>Restart Level</button>
            </div>
        </div>
    )
}
