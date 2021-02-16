import React, {useState, useEffect} from 'react'
import Player from './Player'
import MapImage from './MapImage'
import LifeBar from './LifeBar'

export default function Game({ lifePoints, character, setCharacter, handleRestart}) {

    const [map, setMap] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    const [isJadeFound, setIsJadeFound] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/maps/19")
        .then(response => response.json())
        .then(data => {setMap(data.map_image); setIsLoaded(true)})
      }, []);
      
      if(!isLoaded) return <h1>Loading...</h1>


    return (
        <div className="game-container">
            <div className="game" >
                <MapImage map={map} lifePoints={lifePoints} character={character} setCharacter={setCharacter} isJadeFound={isJadeFound} setIsJadeFound={setIsJadeFound}/>
                <Player character={character} setCharacter={setCharacter}/>
            </div>
            <div className="character-info">
                <h2 style={{color: "white"}}>🐍 Kukulkan 🐍</h2>
                <LifeBar character={character}/>
                <h3 style={{color: "white"}}>🏹: {character.ammo}</h3>
                <h3 style={{color: "white"}}>Goal: Find the jade in order to get into the castle! 💎</h3>
                {!isJadeFound ? <p style={{color: "white"}}>Jade Not Found</p> : <p style={{color: "white"}}>You Found The Jade!</p>}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 style={{color: "white"}}>How to Play</h3>
                <p style={{color: "white"}}>Use arrows to move character.</p> 
                <p style={{color: "white"}}>Space bar shoots arrows.</p>
                <p style={{color: "white"}}>Find wooden crates to get more arrows.</p>
                <p style={{color: "white"}}>Find chocolate to give you life.</p>
                <p style={{color: "white"}}>Most importantly don't stand too close to the skeletons! 💀</p>
                <button className="restart-button" style={{fontFamily: "fantasy"}} onClick={handleRestart}>Restart Level</button>
            </div>
        </div>
    )
}
