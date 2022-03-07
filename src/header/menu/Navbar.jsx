import React from 'react'
import Contact from './Contact'
import Menu from './Menu'

import "../menu/Navbar.css"

function navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <Menu/>
        <Contact/>
      </div>
        

    </div>
  )
}

export default navbar