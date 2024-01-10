import React from 'react'
import { useCartContext } from '../Context/Context'

const Cart = () => {
    const {state} = useCartContext()
  return (
    <div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">Product Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total Price</th>
    </tr>
  </thead>
  <tbody>
    {state.cart.map(e=>(
        <tr>
      <th scope="row">{e.id}</th>
      <td>{e.name}</td>
      <td>{e.quntity}</td>
      <td>{e.total}</td>
    </tr>
    ))}
    
    
   
  </tbody>
</table>
    </div>
  )
}

export default Cart
