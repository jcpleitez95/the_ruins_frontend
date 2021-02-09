import React, {useState} from 'react'
import Actor from './Actor'
import useKeyPress from './hooks/useKeyPress'
import useWalk from './hooks/useWalk'
import useShoot from './hooks/useShoot'


export default function Player(character) {
    const [isWalking, setIsWalking] = useState(false)
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
            setIsWalking(true)
        }
        else if (e.key === " ") {
            shoot(dir.toString())
            e.preventDefault()
            setIsWalking(false)
        }
    })
    
    if (isWalking) return (
        <Actor data={data} step={step} dir={dir} position={position} character={character}/>
    )
    
    return (
    <Actor data={data} step={bowStep} dir={bowDir} position={position} character={character}/>
    )
}
