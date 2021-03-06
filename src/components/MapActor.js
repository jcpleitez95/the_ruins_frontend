import React from 'react'
import Map from './Map'

export default function MapActor({position={x:2650, y: 2600}, map, ammos, lifePoints, character, setCharacter, enemies, isJadeFound, setIsJadeFound}) {
    
    return (
        <Map position={position} map={map} ammos={ammos} lifePoints={lifePoints} character={character} setCharacter={setCharacter} enemies={enemies} isJadeFound={isJadeFound} setIsJadeFound={setIsJadeFound}/>
    )
}

