import PropertyListItems from "./PropertyListItems";
export default function PropertyList({properties}) {
    const styles = {display:'flex'}
return(
    <div style={styles}>
        {properties.map(p =>(
            <PropertyListItems key={p.id} {...p}/>
        ))}
    </div>
);
    
}