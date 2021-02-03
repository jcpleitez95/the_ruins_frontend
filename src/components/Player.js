import React from 'react'
import Actor from './Actor'
import useKeyPress from './hooks/useKeyPress'
import useWalk from './hooks/useWalk'
import useShoot from './hooks/useShoot'

export default function Player() {
    let {dir, step, walk, position} = useWalk(9)
    const {bowDir, bowStep, shoot} = useShoot(13)
    
    const data = {
        h:64,
        w:64,
    };

    useKeyPress((e) => {
        if (e.key.includes("Arrow")) {
            walk(e.key)
            e.preventDefault()
        }
        else if (e.key === " ") {
            shoot(dir.toString())
            dir = bowDir
            step = bowStep
        }
    })
    console.log(dir)

    return (
    <Actor data={data} step={step} dir={dir} position={position}/>
    )
}
