import React from 'react'
import { useCartContext } from '../Context/Context'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const {state} = useCartContext()
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link to='/'> <a className="nav-link" aria-current="page">Home</a></Link>
        </li>
        
       
        
      </ul>
      <form className="d-flex" role="search">
    <Link to='/cart'  >  <button type="button" class="btn btn-primary position-relative">
     CART<i className="ri-shopping-cart-line"></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
{state.total}
  </span>
</button>

</Link>
       
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
