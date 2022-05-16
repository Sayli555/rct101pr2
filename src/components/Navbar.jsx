import React from 'react';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>LOGOBAKERY</div>
      <div className='navbarset'>
          <div>Services</div>
          <div>Projects</div>
          <div>About</div>
      </div>
      <div>
          <button>Contact</button>
      </div>
    </div>
  )
}

export default Navbar
