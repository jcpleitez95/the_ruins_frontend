import React from 'react'
import Sprite from "./Sprite"

export default function Actor({data, position={x: 0, y: 0}, step=0, dir=8}) {
    const {h, w} = data;

    return (
        <Sprite
        position={position}
        data ={{
            x: step * w,
            y: dir * h,
            w,
            h,
        }}/>
    )
}

