import React from 'react';
import m1 from './sprites/m1.png';

export default function Sprite({data, position}) {
    const {y, x, h, w} = data

    return (
        <div style={{
            display: "inline-block",
            position: "absolute",
            top: position.y,
            left: position.x,
            height: `${h}px`,
            width: `${w}px`,
            backgroundImage: `url(${m1})`,
            backgroundPosition: `-${x}px -${y}px`,
            backgroundRepeat: "no-repeat",
            imageRendering: "pixelated",

        }}>
        </div>
    )
}
