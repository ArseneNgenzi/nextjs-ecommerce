import React from 'react'
import Link from 'next/link'
import {AiFillInstagram, AiOutlineShopping} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Arsene Store</Link>
      </p>
      <button type='button' className="cart-icon" >
        <AiOutlineShopping/>
        <span className='cart-item-qty'>1</span>
        {/* <AiFillInstagram/> */}
      </button>
    </div>
  )
}

export default Navbar