import React from 'react'
import Sprite from "./Sprite"

export default function Actor({data, step=0, dir=8, character, setCharacter}) {
    const {h, w} = data;
    
    return (
        <Sprite character={character}
        setCharacter={setCharacter}
        data ={{
            x: step * w,
            y: dir * h,
            w,
            h,
        }}/>
    )
}

