export default function ShoppingList({list}) {
    return(
        <div>
            <ul>
            {list.map(l => <h1 key={l.id} style={{color: l.purchased? "grey":"red", textDecoration: l.purchased?'line-through':'none'} }>{l.name} - {l.quantity}</h1> )}
            </ul>
        </div>
    );
    
}