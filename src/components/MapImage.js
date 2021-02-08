import React, {useState, useEffect} from 'react'
import useKeyPress from './hooks/useKeyPress'
import MapActor from './MapActor'

export default function MapImage({map, ammos, lifePoints}) {

    const [position, setPosition] = useState({x: 2650, y: 2600});

    useKeyPress((e) => {
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
    })
    console.log(position)
   
    return (
        <MapActor position={position} map={map} ammos={ammos} lifePoints={lifePoints}/>
    )
}
