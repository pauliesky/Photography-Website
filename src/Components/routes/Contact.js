import React from "react";
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div className="hero">
        <p>If you are inquring about our services, priceing and availability, please use our contact form below</p>
        <p>Please allow 48-72 hours for a response. Thank you</p>
      </div>
      <form>
        <div className="form-container">
          <label>NAME</label>
          <input
            type='text'
            value={''}
            onChange={''} />
          <label>EMAIL</label>
          <input
            type='mail'
            value={''}
            onChange={''} />
          <label>PHONE</label>
          <input
            type='number'
            value={''}
            onChange={''} />
          <label>INSTAGRAM HANDLE</label>
          <input
            type='text'
            value={''}
            onChange={''} />
          <div className="radio-container">
            <label>WHAT TYPE OF SERVICE ARE YOU ENQURING ABOUT?</label>
            <div className="radio" >
              <div className="radio-option">
                <input
                  type='radio'
                  value={''}
                  onChange={''} />
                <label>Wedding</label>
              </div>
              <div className="radio-option">
                <input
                  type='radio'
                  value={''}
                  onChange={''} />
                <label>Pre-wedding Session</label>
              </div>
              <div className="radio-option">
                <input
                  type='radio'
                  value={''}
                  onChange={''} />
                <label>Potrait Session</label>
              </div>
              <div className="radio-option">
                <input
                  type='radio'
                  value={''}
                  onChange={''} />
                <label>Event</label>
              </div>
              <div className="radio-option">
                <input
                  type='radio'
                  value={''}
                  onChange={''} />
                <label>Others</label>
              </div>

            </div>
          </div>
          <label>OTHERS,PLEASE SPECIFY</label>
          <input
            type='text'
            value={''}
            onChange={''} />
          <label>EVENT DATE</label>
          <input
            type='date'
            value={''}
            onChange={''} />
          <label>EVENT/SHOOT LOCATION</label>
          <input
            type='text'
            value={''}
            onChange={''} />
          <label>WHO CAN WE THANK FOR SENDING YOU OUR WAY?</label>
          <input
            type='mail'
            value={''}
            onChange={''} />
          <label>PLEASE SHARE ANY ADDITIONAL DETAILS</label>
          <textarea
            style={{ height: '20rem', width: '30rem', padding: '20px' }}
            type='textarea'
            value={''}
            onChange={''} />
          <div className="btn">
            <button
              type='submit'>
              SEND MESSAGE
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact