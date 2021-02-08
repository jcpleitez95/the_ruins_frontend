import React from 'react'

export default function Map({position, map, ammos, lifePoints}) {
    console.log(lifePoints)
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
            </div>
        </div>
        )
    }
