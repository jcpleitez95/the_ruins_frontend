import {useState} from 'react'

export default function useWalk(maxSteps) {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [dir, setDir] = useState(0)
    const [step, setStep] = useState(0)

    const directions ={
        ArrowDown: 10,
        ArrowLeft: 9,
        ArrowRight: 11,
        ArrowUp: 8
    };
    const stepSize = 10;

    const modifier ={
        ArrowDown: {x: 0, y: stepSize},
        ArrowLeft: {x: -stepSize, y: 0},
        ArrowRight: {x: stepSize, y: 0},
        ArrowUp: {x: 0, y: -stepSize}
    }

    function walk(dir) {
        setDir(prev => {
            if(directions[dir] === prev) move(dir);
            return directions[dir];
        }); 
        setStep(prev => prev < maxSteps - 1 ? prev + 1 : 0)

    }

    function move(dir) {
        setPosition(prev => ({
            x: prev.x + modifier[dir].x,
            y: prev.y + modifier[dir].y
        }))
    }
    
    return {
        walk,
        dir,
        step,
        position
    }
}
