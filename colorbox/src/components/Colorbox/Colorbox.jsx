import { useState } from 'react'
import './Colorbox.css'
export default function Colorbox({colors}) {
    const randomnum = Math.floor(Math.random()*colors.length)

    const [color,switchColor] = useState(colors[randomnum])
    const changeColor =()=>{
        const randomnum = Math.floor(Math.random()*15+1)
        switchColor(colors[randomnum])
    }
    const styled = {backgroundColor:color}
    return(
        <div className='Colorbox' style={styled} onClick={changeColor}>
        </div>
    )
}