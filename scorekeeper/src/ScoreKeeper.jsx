import React from 'react'
import { useState } from 'react'

export default function ScoreKeeper({player,target}) {
    const [scores, setscores]=useState(new Array(player).fill(0))
    console.log(scores)
    const increment=(idx)=>{
       return setscores((prevScore,idx) =>{
            copy = (...scores)
            return copy[idx] = prevScore+1; 
            })
    }
  return (
    <div>
        {scores.map((prevScore,idx)=>{
            return <h1 key={idx}> Player {idx +1} : {prevScore} <button onClick={increment}>Click Me</button> </h1> 
            })}
      
    </div>
  )
}
