import Colorbox from "../Colorbox/Colorbox";
import './Colorboxgrid.css'
export default function Colorboxgrid({colors}) {
   const boxes= []
   for (let index = 0; index < 25; index++) {
    boxes.push(<Colorbox colors={colors}/>)
    
   }
    return(
        
        <div className="Colorboxgrid">
            {boxes}
        </div>
        
    )
    
}