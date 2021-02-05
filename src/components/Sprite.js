import React from 'react';
import m1 from './sprites/m1.png';

export default function Sprite({data}) {
    const {y, x, h, w} = data

    return (
        <div style={{
            display: "inline-block",
            position: "absolute",
            top: 375,
            left: 550,
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
