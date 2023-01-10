import React from "react";
import Homeimgs from '../Images/HomeImgs/Homeimgs'
import { useState } from "react";
import '../Images/HomeImgs/Homeimgs.css'
import { FaTimes, FaArrowRight, FaArrowLeft, } from 'react-icons/fa';
function Home() {

  const [homeImgs] = useState(Homeimgs)
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber(homeImgs.length - 1) : setSlideNumber(slideNumber - 1)
  }
  const nextSlide = () => {
    slideNumber + 1 === homeImgs.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
  }



  return (
    <>
      <div className="home-img">
      {/* <img></img> */}
      </div>
      {openModal &&
        <div className="sliderWrap">
          <div className="sldNum">{slideNumber + 1}/{homeImgs.length}</div>
          <FaTimes icon={FaTimes} className='btnClose' onClick={handleCloseModal} />
          <FaArrowLeft icon={FaArrowLeft} className='btnPrev' onClick={prevSlide} />
          <FaArrowRight icon={FaArrowLeft} className='btnNext' onClick={nextSlide} />
          <div className="fullScreenImage">
            <img src={homeImgs[slideNumber].img} alt='' />
          </div>
        </div>}
      <div className="home-gallary">
        {homeImgs.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <img alt="img" src={item.img} style={{ width: '100%' }} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home