import React from "react";
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const form = useRef();
  const radioForm = useRef()

  const sucessNotify = () => toast.success("Message Sent!");
  const sendRadio = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rg3xwcd', 'template_ojanga7', form.current, 'os1F4Wa4kPhdKrsx_')
    e.target.reset()
  };

  const style = {
    height: '20rem',
    width: '30rem',
    padding: '20px',
    resize: 'none',

    // @media screen and (max-width: 576px):' { 
    //     height: '10rem',
    //     width: '10rem',
    //   }'

  };


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rg3xwcd', 'template_ojanga7', form.current, 'os1F4Wa4kPhdKrsx_')
    e.target.reset()
  };

  // ref = { radioForm } onSubmit = { sendRadio } 
  return (
    <div className="contact">
      <div className="hero">
        <p>If you are inquring about our services, priceing and availability, please use our contact form below</p>
        <p>Please allow 48-72 hours for a response. Thank you</p>
      </div>
      <form ref={form} onSubmit={sendEmail}  >
        <div className="form-container">
          <label>NAME</label>
          <input
            className="input__size"
            type='text'
            name='name'
            required
          />
          <label>EMAIL</label>
          <input
            className="input__size"
            type='mail'
            name='email'
            required
          />
          <label>PHONE</label>
          <input
            className="input__size"
            type='number'
            name='number'
            required
          />
          <label>INSTAGRAM HANDLE</label>
          <input
            className="input__size"
            type='text'
            name='IG'
          />
          <div className="radio-container">
            <label>WHAT TYPE OF SERVICE ARE YOU ENQURING ABOUT?</label>
            <div ref={radioForm} onSubmit={sendRadio} className="radio" >
              <div className="radio-option">
                <input
                  type='radio'
                  name='radio-1'
                />
                <label>Wedding</label>
              </div>
              <div className="radio-option">
                <input
                  type='radio'
                  name='radio-1'

                />
                <label>Pre-wedding Session</label>
              </div>
              <div className="radio-option">
                <input
                  type='radio'
                  name='radio-1'

                />
                <label>Potrait Session</label>
              </div>
              <div className="radio-option">
                <input
                  type='radio'
                  name='radio-1'

                />
                <label>Event</label>
              </div>
              <div className="radio-option">
                <input
                  type='radio'
                  name='radio-1'

                />
                <label>Others</label>
              </div>

            </div>
          </div>
          <label>OTHERS,PLEASE SPECIFY</label>
          <input
            className="input__size"
            type='text'
            name='others'
          />
          <label>EVENT DATE</label>
          <input
            className="input__size"
            type='date'
            name='date'
            required
          />
          <label>EVENT/SHOOT LOCATION</label>
          <input
            className="input__size"
            type='text'
            name='location'
            required
          />
          <label className="label__who">WHO CAN WE THANK FOR SENDING YOU OUR WAY?</label>
          <input
            className="input__size"
            type='mail'
            name='referal'
            required
          />
          <label>PLEASE SHARE ANY ADDITIONAL DETAILS</label>
          <div className="textarea__wrapper">
            <textarea
            className="textarea"
            style={style}
            type='textarea'
            name='message'
            required
            />
          </div>

          <div className="btn">
            <button
              onClick={sucessNotify}
              type='submit'>
              SEND MESSAGE
            </button>
            <Toaster />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact