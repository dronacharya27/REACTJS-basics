import React, { useContext } from 'react'
import { useProductContext } from '../../contexts/ProductContext'


export const Navbar = ({home}) => {
const {name} = useProductContext()

  return (
    <div>
       Hello {name}
    </div>
  )
}


