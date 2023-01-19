import React from 'react'
import './Footer.css'
import { FaInstagram } from 'react-icons/fa';
import { HiArrowLongUp } from "react-icons/hi2";
import { Link } from "react-router-dom";




function Footer() {

  const handleClick = () => {
    window.scrollTo({top:0,left:0, behavior: 'smooth' });
  };

  return (
    <>
      <div className='footer'>
        <div className='footer-content'>
          <div className='col'><a href='https://www.instagram.com/clealth/' target='_blank' rel='noreferrer'><FaInstagram className='IG' /></a></div>
          <div className='col col-links' >
            <Link to='/info' className='text-link'><li>INFO</li></Link>
            <Link to='/chronicles' className='text-link'><li>CHRONICLES</li></Link>
            <Link to='/contact' className='text-link'><li>CONTACT</li></Link></div>
          <div className='col copy'><p>All Content Copyright &copy; 2023 Enoch Oyebade Photography</p></div>
           <div className='col'> <HiArrowLongUp className='arrow-up' onClick={handleClick} /></div>
        </div>
    </div>
    
    </>
  )
}

export default Footer