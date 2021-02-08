import React from 'react'
import Player from './Player'
import MapImage from './MapImage'

export default function Game({ammos, map, lifePoints}) {
    
    return (
        <div className="game" >
            <MapImage ammos={ammos} map={map} lifePoints={lifePoints}/>
            <Player/>
        </div>
    )
}
