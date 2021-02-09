import React, {useState, useEffect} from 'react'
import Player from './Player'
import MapImage from './MapImage'

export default function Game({ lifePoints, character, setCharacter}) {
    const [map, setMap] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/maps/14")
        .then(response => response.json())
        .then(data => {setMap(data.map_image); setIsLoaded(true)})
      }, []);
      
      if(!isLoaded) return <h1>Loading...</h1>

    return (
        <div className="game-container">
            <div className="game" >
                <MapImage map={map} lifePoints={lifePoints} character={character} setCharacter={setCharacter}/>
                <Player character={character}/>
            </div>
            <div className="character-info">
                <h2>Kukulkan</h2>
                <h3>HP: {character.hp}</h3>
                <h3>Arrows: {character.ammo}</h3>
            </div>
        </div>
    )
}
