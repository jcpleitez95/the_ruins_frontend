import React, {useEffect} from 'react'

export default function Map({position, map, ammos, lifePoints, character, setCharacter, enemies}) {
    console.log(enemies)
    useEffect(() => {
        if(ammos.length !== 0){
            if (position.x + ammos[0].props.style.bottom >= 2760 && position.x + ammos[0].props.style.bottom <= 2780 && position.y + ammos[0].props.style.right >= 2640 && position.y + ammos[0].props.style.right <= 2660){
                if(character.ammo < 30) {fetch(`http://localhost:3000/characters/${character.id}`,{
                   method: 'PATCH',
                   headers: {
                       "Content-Type": "application/json"
                   },
                   body: JSON.stringify({ammo: 30})
               })
               .then(response => response.json())
               .then(data => setCharacter(data))}
            }
            else if (position.x + ammos[1].props.style.bottom >= 2760 && position.x + ammos[1].props.style.bottom <= 2780 && position.y + ammos[1].props.style.right >= 2640 && position.y + ammos[1].props.style.right <= 2660){
                if(character.ammo < 30)fetch(`http://localhost:3000/characters/${character.id}`,{
                   method: 'PATCH',
                   headers: {
                       "Content-Type": "application/json"
                   },
                   body: JSON.stringify({ammo: 30})
               })
               .then(response => response.json())
               .then(data => setCharacter(data))
            }
        }
      }, [ammos, character.ammo, character.id, position.x, position.y, setCharacter]);

      useEffect(() => {
        if(lifePoints.length !== 0){
            if (position.x + lifePoints[0].props.style.bottom >= 2760 && position.x + lifePoints[0].props.style.bottom <= 2780 && position.y + lifePoints[0].props.style.right >= 2640 && position.y + lifePoints[0].props.style.right <= 2660){
                if(character.hp < 100) {fetch(`http://localhost:3000/characters/${character.id}`,{
                   method: 'PATCH',
                   headers: {
                       "Content-Type": "application/json"
                   },
                   body: JSON.stringify({hp: character.hp + 25})
               })
               .then(response => response.json())
               .then(data => setCharacter(data))}
            }
            else if (position.x + lifePoints[1].props.style.bottom >= 2760 && position.x + lifePoints[1].props.style.bottom <= 2780 && position.y + lifePoints[1].props.style.right >= 2640 && position.y + lifePoints[1].props.style.right <= 2660){
                if(character.hp < 100){fetch(`http://localhost:3000/characters/${character.id}`,{
                   method: 'PATCH',
                   headers: {
                       "Content-Type": "application/json"
                   },
                   body: JSON.stringify({hp: character.hp + 25})
               })
               .then(response => response.json())
               .then(data => setCharacter(data))}
            }
        }
      }, [lifePoints, character.hp, character.id, position.x, position.y, setCharacter]);

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
            </div>
        </div>
        )
    }
