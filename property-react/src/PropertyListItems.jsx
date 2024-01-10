export default function PropertyListItems({name,price,rating}) {
    const styles = {border:'1px white solid',margin:'10px'}
    return (
        <div style={styles}>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>{rating}</h4>
        </div>
    )
    
}