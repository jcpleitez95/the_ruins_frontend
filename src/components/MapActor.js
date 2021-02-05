import React from 'react'
import Map from './Map'

export default function MapActor({position={x:2650, y: 2600}, map}) {
    
    return (
        <Map position={position} map={map}/>
    )
}

