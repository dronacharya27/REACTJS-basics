export default function Game() {
    const num1 = Math.floor(Math.random()*3)+1;
    const num2 = Math.floor(Math.random()*3)+1;
    const iswinner = num1===num2;
    const styles = {color:iswinner?'Green':'Red'}
    return(
        <div className="Game" style={styles}>
        {iswinner?<h3>You Win</h3>:null}
        <p>num1:{num1}</p>
        <p>num2:{num2}</p>
        </div>
    );
}