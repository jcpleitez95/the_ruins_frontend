import React, {useState, useEffect} from 'react'
import useKeyPress from './hooks/useKeyPress'
import MapActor from './MapActor'

export default function MapImage({map, character, setCharacter}) {
    const [position, setPosition] = useState({x: 2650, y: 2600});
    const [ammos, setAmmos] = useState([])
    const [lifePoints, setLifePoints] = useState([])
    const [enemies, setEnemies] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/ammos")
        .then(response => response.json())
        .then(data => { 
          setAmmos(data.map(ammo => <img key={ammo.id} className="ammo" src={ammo.image} alt="ammo" style={{
            bottom: Math.floor(Math.random() * 2650),
            right: Math.floor(Math.random() * 2600)
            }}/>
            ))
        })
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/life_points")
        .then(response => response.json())
        .then(data => setLifePoints(data.map(lifePoint => <div key={lifePoint.id} className="life-point" style={{
          display: "inline-block",
          position: "absolute",
          height: 16,
          width: 16,
          backgroundImage: `url(${lifePoint.image})`,
          backgroundPosition: '-16px -1px',
          bottom: Math.floor(Math.random() * 2650),
          right: Math.floor(Math.random() * 2600)
          }}></div>
        )))
      }, []);

      useEffect(() => {
        fetch("http://localhost:3000/enemies")
        .then(response => response.json())
        .then(data => setEnemies(data.map(enemy => <div key={enemy.id} className="enemy" style={{
          display: "inline-block",
          position: "absolute",
          height: 64,
          width: 64,
          backgroundImage: `url(${enemy.enemy_sprite})`,
          backgroundPosition: '-1px -512px',
          bottom: Math.floor(Math.random() * 2650),
          right: Math.floor(Math.random() * 2600)
          }}></div>
        )))
      }, []);

    useKeyPress((e) => {
        if (character.hp > 0){
            if (e.key === "ArrowDown") {
                setPosition(prev => ({
                            x: prev.x + 20,
                            y: prev.y
                        }))
                e.preventDefault()
            }
            else if(e.key === "ArrowUp"){
                setPosition(prev => ({
                    x: prev.x - 20,
                    y: prev.y
                }))
                e.preventDefault()
            }
            else if(e.key === "ArrowRight"){
                setPosition(prev => ({
                    x: prev.x,
                    y: prev.y + 20
                }))
                e.preventDefault()
            }
            else if(e.key === "ArrowLeft"){
                setPosition(prev => ({
                    x: prev.x,
                    y: prev.y - 20
                }))
                e.preventDefault()
            }
        }
        else if(character.hp === 0){
            setPosition(prev => ({
                x: prev.x,
                y: prev.y
            }))
            e.preventDefault()
        }
    })

    return (
        <MapActor ammos={ammos} position={position} map={map} lifePoints={lifePoints} character={character} setCharacter={setCharacter} enemies={enemies}/>
    )
}
