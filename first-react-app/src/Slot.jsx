export default function Slot({val1,val2,val3}) {
    return (
        <div>
    <h1>{val1} {val2} {val3}</h1>
    {val1===val2 && val1===val3 ? <h2 style={{color:'green'}}>You Win</h2>: <h2 style={{color:'red'}}>You Loss</h2> }
    </div>
    );
} 