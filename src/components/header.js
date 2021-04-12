import React from 'react'
import { useLocation } from 'react-router-dom'

import '../css/hero.css'
import Button from './button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className="header">
      <h1 style={{ color: 'red' }} >{title}</h1>
      { location.pathname === '/' && <Button 
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />}
    </header>
  )
}


export default Header
