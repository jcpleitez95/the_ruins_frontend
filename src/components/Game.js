import React from 'react'
import Player from './Player'
import MapImage from './MapImage'

export default function Game() {
    
    return (
        <div className="game" >
            <MapImage/>
            <Player/>
        </div>
    )
}
