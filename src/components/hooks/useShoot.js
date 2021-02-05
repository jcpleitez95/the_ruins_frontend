import {useState} from 'react'

export default function useShoot(maxSteps) {
    const [bowDir, setBowDir] = useState(0)
    const [bowStep, setBowStep] = useState(0)
    const directions ={
        "10": 18,
        "9": 17,
        "11": 19,
        "8": 16
    };

    function shoot(dir){
        setBowDir(directions[dir])
        setBowStep(prev => prev < maxSteps - 1 ? prev + 1 : 0)
    }

    return {
        shoot,
        bowDir,
        bowStep,
    }
}
