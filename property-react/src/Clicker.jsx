
export default function Clicker({btntext,text}){
function handleClick(){
        alert(text)
    }
return(
    <div>
        <button onClick={handleClick}>{btntext}</button>
    </div>
)
}