export default function ColorList({color}) {

    return(
        <div>
            <ul>
                {color.map((c)=> <li style={{color:c}}> {c}</li> )}
            </ul>
        </div>
    );
    
}