import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';



function Navbar() {
  // https://drive.google.com/uc?export=view&id=1xRYIQhqpS6QagwZ_PfyApp6SLrwpEviM
  // https://drive.google.com/file/d//view?usp=sharing
  const [mobile, setMobile] = useState(false)

  return (
    <>
      <nav className="navbar">
        <Link to='/'><img alt="logo" className="logo" src="https://drive.google.com/uc?export=view&id=1xRYIQhqpS6QagwZ_PfyApp6SLrwpEviM" /></Link>
        <ul className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
          <Link to='/' className='text-link' ><li>HOME</li></Link>
          <Link to='/info' className='text-link'><li>INFO</li></Link>
          <Link to='/chronicles' className='text-link'><li>CHRONICLES</li></Link>
          <Link to='/contact' className='text-link'><li>CONTACT</li></Link>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}

export default Navbar
