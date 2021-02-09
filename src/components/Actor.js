import React from 'react'
import Sprite from "./Sprite"

export default function Actor({data, step=0, dir=8, character}) {
    const {h, w} = data;
   
    return (
        <Sprite character={character}
        data ={{
            x: step * w,
            y: dir * h,
            w,
            h,
        }}/>
    )
}

