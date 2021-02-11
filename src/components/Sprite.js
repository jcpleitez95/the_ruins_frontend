import React, {useEffect} from 'react';
import arrow from './sprites/arrow.png'

export default function Sprite({data, character, setCharacter}) {
    const {y, x, h, w} = data
   
    useEffect(() => {
        if(character.character.ammo > 0 && data.x === 576 && data.y === 1088){
            return (
                
                <div style={{
                    display: "inline-block",
                    position: "absolute",
                    bottom: 325,
                    right: 525,
                    height: `${h}px`,
                    width: `${w}px`,
                    backgroundImage: `url(${character.character.character_sprite})`,
                    backgroundPosition: `-${x}px -${y}px`,
                    backgroundRepeat: "no-repeat",
                    imageRendering: "pixelated",
                    
                }}>
                    <div className="arrow" style={{
                        display: "inline-block",
                        backgroundImage: `url(${arrow})`,
                        height: 32,
                        width: 32,
                        backgroundPosition: '-1px -1px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                </div>,

                fetch(`http://localhost:3000/characters/${character.character.id}`,{
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ammo: character.character.ammo - 1})
                })
                .then(response => response.json())
                .then(data => character.setCharacter(data))
)
        }
        else if(character.character.ammo > 0 && data.x === 576 && data.y === 1152){
            return (

                <div style={{
                    display: "inline-block",
                    position: "absolute",
                    bottom: 325,
                    right: 525,
                    height: `${h}px`,
                    width: `${w}px`,
                    backgroundImage: `url(${character.character.character_sprite})`,
                    backgroundPosition: `-${x}px -${y}px`,
                    backgroundRepeat: "no-repeat",
                    imageRendering: "pixelated",
        
                }}>
                    <div className="arrow" style={{
                        display: "inline-block",
                        backgroundImage: `url(${arrow})`,
                        height: 32,
                        width: 32,
                        backgroundPosition: '-32px -1px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                </div>,

                fetch(`http://localhost:3000/characters/${character.character.id}`,{
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ammo: character.character.ammo - 1})
                })
                .then(response => response.json())
                .then(data => character.setCharacter(data))

            )
        }
        else if(character.character.ammo > 0 && data.x === 576 && data.y === 1216){
            return (

                <div style={{
                    display: "inline-block",
                    position: "absolute",
                    bottom: 325,
                    right: 525,
                    height: `${h}px`,
                    width: `${w}px`,
                    backgroundImage: `url(${character.character.character_sprite})`,
                    backgroundPosition: `-${x}px -${y}px`,
                    backgroundRepeat: "no-repeat",
                    imageRendering: "pixelated",
        
                }}>
                    <div className="arrow" style={{
                        display: "inline-block",
                        backgroundImage: `url(${arrow})`,
                        height: 32,
                        width: 32,
                        backgroundPosition: '-64px -1px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                </div>,

                fetch(`http://localhost:3000/characters/${character.character.id}`,{
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ammo: character.character.ammo - 1})
                })
                .then(response => response.json())
                .then(data => character.setCharacter(data))

            )
        }
        else if(character.character.ammo > 0 && data.x === 576 && data.y === 1024){
            return (
            
                <div style={{
                    display: "inline-block",
                    position: "absolute",
                    bottom: 325,
                    right: 525,
                    height: `${h}px`,
                    width: `${w}px`,
                    backgroundImage: `url(${character.character.character_sprite})`,
                    backgroundPosition: `-${x}px -${y}px`,
                    backgroundRepeat: "no-repeat",
                    imageRendering: "pixelated",
        
                }}>
                    <div className="arrow" style={{
                        display: "inline-block",
                        backgroundImage: `url(${arrow})`,
                        height: 32,
                        width: 32,
                        backgroundPosition: '-96px -1px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    </div>
                </div>,

                fetch(`http://localhost:3000/characters/${character.character.id}`,{
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ammo: character.character.ammo - 1})
                })
                .then(response => response.json())
                .then(data => character.setCharacter(data))

            )
        }
    }, [character, data, h, w, x, y, setCharacter])

    
    if(character.character.hp === 0){
        return (
            <div style={{
            display: "inline-block",
            position: "absolute",
            bottom: 325,
            right: 525,
            height: `${h}px`,
            width: `${w}px`,
            backgroundImage: `url(${character.character.character_sprite})`,
            backgroundPosition: ` -320px -1280px`,
            backgroundRepeat: "no-repeat",
            imageRendering: "pixelated",

        }}>
        </div>
        )
    }


    return (
        <div style={{
            display: "inline-block",
            position: "absolute",
            bottom: 325,
            right: 525,
            height: `${h}px`,
            width: `${w}px`,
            backgroundImage: `url(${character.character.character_sprite})`,
            backgroundPosition: `-${x}px -${y}px`,
            backgroundRepeat: "no-repeat",
            imageRendering: "pixelated",

        }}>
        </div>
    )
}
