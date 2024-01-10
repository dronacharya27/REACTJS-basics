import { useState } from "react"
export default function Counter(params) {
    const [num, setNum] = useState(0)
    const handleClick = () =>{
        setNum(num+1)
    }
    return(
        <div>
            <p>The Count is:{num}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
    
}