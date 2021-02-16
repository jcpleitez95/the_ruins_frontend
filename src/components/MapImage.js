import React, {useState, useEffect} from 'react'
import useKeyPress from './hooks/useKeyPress'
import MapActor from './MapActor'

export default function MapImage({map, character, setCharacter, isJadeFound, setIsJadeFound}) {
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
          fetch("http://localhost:3000/enemies/")
          .then(response => response.json())
          .then(data => setEnemies(data.map(enemy => 
            <div className="enemy" key={enemy.id} style={{
                display: "inline-block",
                position: "absolute",
                height: 64,
                width: 64,
                backgroundImage: `url(${enemy.enemy_sprite})`,
                backgroundPosition: "-1px -640px", 
                bottom: Math.floor(Math.random() * 2650),
                right: Math.floor(Math.random() * 2600)
            }}>
            </div>
            )))
        }, []);
    

    useKeyPress((e) => {
        if (character.hp > 0){
            if (e.key === "ArrowDown" && position.x < 2770) {
                setPosition(prev => ({
                            x: prev.x + 20,
                            y: prev.y
                        }))
                e.preventDefault()
            }
            else if(e.key === "ArrowUp" && position.x > -390){
                setPosition(prev => ({
                    x: prev.x - 20,
                    y: prev.y
                }))
                e.preventDefault()
            }
            else if(e.key === "ArrowRight" && position.y < 2640){
                setPosition(prev => ({
                    x: prev.x,
                    y: prev.y + 20
                }))
                e.preventDefault()
            }
            else if(e.key === "ArrowLeft" && position.y > -520){
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
        <MapActor ammos={ammos} position={position} map={map} lifePoints={lifePoints} character={character} setCharacter={setCharacter} enemies={enemies} isJadeFound={isJadeFound} setIsJadeFound={setIsJadeFound}/>
    )
}
