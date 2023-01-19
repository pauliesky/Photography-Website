import React from "react";
import './Info.css'
// https://drive.google.com/file/d/1GBbLM7nmptodT0-Ac9GQud9bu2wWLLiG/view?usp=sharing
// https://drive.google.com/file/d//view?usp=sharing
// 
/* <img className="about-img" src="https://drive.google.com/uc?export=view&id=1BazFqGZz1c-1sF4lFoQwzlVLKoyWFybU" alt="img"></img> */ 

// https://res.cloudinary.com/dzbtxebuf/image/upload/v1671820813/cld-sample.jpg

function Info() {
  return (
    <>

      <div className="info">
        <div className="info__title">
          <h1>About Us</h1>
        </div>

        <div className="info__content" >
          <div className="info__image">
            <img className="info__img" alt="info-img" src="https://drive.google.com/uc?export=view&id=1BazFqGZz1c-1sF4lFoQwzlVLKoyWFybU"></img>
          </div>
          <div className="info__text-1">
            <p>Hi there, my name is Enoch Oyebade.</p>
            <p> I'm a photographer currently residing in Lagos, Nigeria.
            </p>
            <p> I picked up photography as a hobby in 2014 while studying Medicine in Uni and it's become an art that I love so much. It’s become something <br /> I’m passionate about.
              I delved into shooting weddings in 2021 and I'm so proud of how far this brand has come.
            </p>
            <p> At Enoch Oyebade Photography, we tell love stories in their most authentic and truest forms and we're especially known for our clean edits and cinematic grades.
            </p>
          </div>
        </div>
        <div className="info__text-2-container">

          <div className="info__text-2">
            <h2> MOMENTS TODAY, MEMORIES FOREVER</h2>
            <p>For us, the dream is to tell your story in an eccentric way that sets it apart from others and for you to look back at your <br />pictures light years from now and still reminisce over them as magnificent works of art.</p>
            <p>Every wedding is unique and we infuse this uniqueness into telling each story. We're keen on details and moments and we make <br /> sure to be present in every moment of your story to fully capture its essence.
            </p>
          </div>
        </div>





      </div>


    </>
  )
}

export default Info