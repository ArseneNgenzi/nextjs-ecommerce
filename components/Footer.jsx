import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <p>© 2022 Arsene Store All rights reserved</p>
        <p className='icons'>
          <AiFillInstagram/>
          <AiOutlineTwitter/>
        </p>
      </div>
    </div>
  )
}

export default Footer