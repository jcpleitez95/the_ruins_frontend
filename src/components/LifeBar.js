import React from 'react'

export default function LifeBar({character}) {
    const fullWidth = 68;
    const current = character.hp;
    const max = 100;

    const percent = current/max;
    const pixelFill = Math.floor(fullWidth * percent);
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width= "80%" viewBox="0 -0.5 74 10" shape-rendering="crispEdges">
            <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
            <path stroke="#696a6a" d="M0 0h2M72 0h2M0 1h1M73 1h1M3 4h68M3 5h68M3 6h68M0 8h1M73 8h1M0 9h2M72 9h2" />
            <path stroke="#000000" d="M2 0h70M1 1h1M72 1h1M0 2h1M2 2h70M73 2h1M0 3h1M2 3h1M71 3h1M73 3h1M0 4h1M2 4h1M71 4h1M73 4h1M0 5h1M2 5h1M71 5h1M73 5h1M0 6h1M2 6h1M71 6h1M73 6h1M0 7h1M2 7h70M73 7h1M1 8h1M72 8h1M2 9h70" />
            <path stroke="#ffffff" d="M2 1h70M1 2h1M72 2h1M1 3h1M72 3h1M1 4h1M72 4h1M1 5h1M72 5h1M1 6h1M72 6h1M1 7h1M72 7h1M2 8h70" />
            <path stroke="#595652" d="M3 3h68" />
            
            <rect fill="cyan" x={3} y={2.5} width={pixelFill} height={4} />
        </svg>  
    )
}
