import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';


// https://drive.google.com/file/d//view?usp=sharing
// https://drive.google.com/file/d//view?usp=sharing
// https://drive.google.com/uc?export=view&id=1xRYIQhqpS6QagwZ_PfyApp6SLrwpEviM
function Navbar() {
  const [mobile, setMobile] = useState(false)
  const [show, setShow] = useState(false)

  const navbarScroll = () => {
    if (window.scrollY > 200) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarScroll)
    return () => {
      window.removeEventListener('scroll', navbarScroll)
    }
  }, [])

  return (
    <>
      <div className="nav__container">
        <nav className={`navbar glass ${show && 'nav-display'} `}>
          <div className="nav__logo">
            <Link to='/'>
              <img alt="logo" className="logo" src="https://drive.google.com/uc?export=view&id=1j4try0CrgPCiaQJzgbBm_kYnb1hEP3V7" />
            </Link>
          </div>
          <div>
            <ul className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
              <Link to='/' className='text-link' ><li>HOME</li></Link>
              <Link to='/info' className='text-link'><li>INFO</li></Link>
              <Link to='/chronicles' className='text-link'><li>CHRONICLES</li></Link>
              <Link to='/contact' className='text-link'><li>CONTACT</li>
              </Link>
            </ul>
          </div>
          <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
            {mobile ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>
    </>
  )
}

export default Navbar
