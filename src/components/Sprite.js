import React from 'react';

export default function Sprite({data, character}) {
    const {y, x, h, w} = data
    
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
