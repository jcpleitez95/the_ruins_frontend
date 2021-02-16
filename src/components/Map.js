import React, {useEffect} from 'react'

export default function Map({position, map, ammos, lifePoints, character, setCharacter, enemies, isJadeFound, setIsJadeFound}) {

    useEffect(() => {
        if(enemies.length !== 0){
            enemies.forEach(enemy =>{
                if (position.x + enemy.props.style.bottom >= 2760 && position.x + enemy.props.style.bottom <= 2780 && position.y + enemy.props.style.right >= 2610 && position.y + enemy.props.style.right <= 2630){
                    if(character.hp > 0) {fetch(`http://localhost:3000/characters/${character.id}`,{
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({hp: character.hp - 1})
                })
                .then(response => response.json())
                .then(data => setCharacter(data))}
                }
            })
        }
    }, [character, position, setCharacter, enemies])


    useEffect(() => {
        if(ammos.length !== 0){
            ammos.forEach(ammo => {
                if (position.x + ammo.props.style.bottom >= 2760 && position.x + ammo.props.style.bottom <= 2780 && position.y + ammo.props.style.right >= 2640 && position.y + ammo.props.style.right <= 2660){
                    if(character.ammo < 30) {fetch(`http://localhost:3000/characters/${character.id}`,{
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ammo: character.ammo + 1})
                })
                .then(response => response.json())
                .then(data => setCharacter(data))}
                }})
        }
      }, [ammos, character.ammo, character.id, position.x, position.y, setCharacter]);

      useEffect(() => {
        if(lifePoints.length !== 0){
            lifePoints.forEach(lifePoint => {
                if (position.x + lifePoint.props.style.bottom >= 2760 && position.x + lifePoint.props.style.bottom <= 2780 && position.y + lifePoint.props.style.right >= 2640 && position.y + lifePoint.props.style.right <= 2660){
                    if(character.hp < 100) {fetch(`http://localhost:3000/characters/${character.id}`,{
                       method: 'PATCH',
                       headers: {
                           "Content-Type": "application/json"
                       },
                       body: JSON.stringify({hp: character.hp + 1})
                   })
                   .then(response => response.json())
                   .then(data => setCharacter(data))}
                }
            })
        }
      }, [lifePoints, character.hp, character.id, position.x, position.y, setCharacter]);

      if(position.x + 1750 >= 2760 && position.x + 1750 <= 2780 && position.y + 56 >= 2640 && position.y + 56 <= 2660){
          setIsJadeFound(true)
          alert("You Found the Jade!")
      }
      if(!isJadeFound && position.x === 110 && position.y === 40){
          alert("Kukulkan, Find the Jade")
      }
      if(isJadeFound && position.x === 110 && position.y === 40){
          alert("Welcome to The Ruins, Kukulkan!")
      }

    return (
        <div className="map-container">
            <div className="map" src={map} alt="map" style={{
                backgroundImage: "url(" + map + ")",
                bottom: position.x,
                right: position.y,
                width: "3200px",
                height: "3200px",
            }}>
            {ammos}
            {lifePoints}
            {enemies}
            <div className="jade" style={{
                position: "absolute",
                width: "32px",
                height: "32px",
                bottom: 1750,
                right: 56
            }}>
            </div>
            </div>
        </div>
        )
    }
