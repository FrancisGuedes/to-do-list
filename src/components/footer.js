import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>FrancisGuedes &copy; 2021</p>
      <Link className='about' to='/about'>About</Link>
    </footer>
  )
}

export default Footer
