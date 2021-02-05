import React from 'react'
import Sprite from "./Sprite"

export default function Actor({data, step=0, dir=8}) {
    const {h, w} = data;
   
    return (
        <Sprite
        data ={{
            x: step * w,
            y: dir * h,
            w,
            h,
        }}/>
    )
}

