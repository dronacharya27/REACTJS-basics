import React from 'react'
import './Products.css'
import { products } from '../../public/product_data'
import { useCartContext } from '../Context/Context'

const Products = () => {
    const {add_to_cart,state,total,remove_from_cart} = useCartContext()
  return (
    <div>
    <div className='productlist'>

        {products.map(e =>(
            <div className="card" key={e.id} style={{width:'18rem'}}>
  <img src={e.img} className="card-img-top image" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{e.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. {e.price}</p>
    <button  className='btn btn-primary' onClick={()=>add_to_cart(e.id,e)}>Add to Cart</button><button  className='btn btn-primary' onClick={()=>remove_from_cart(e.id,e)}>Remove From Cart</button>
  </div>
</div>
        ))}
  
    </div>
    
  
    </div>
  )
}

export default Products
