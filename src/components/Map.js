import React from 'react'

export default function Map({position, map}) {
    console.log(position.y)
    return (
        <img className="map" src={map} alt="map" style={{
           bottom: position.x,
           right: position.y
        }}/>
        )
    }
