import React from "react";
import './Info.css'
// https://drive.google.com/file/d/1GBbLM7nmptodT0-Ac9GQud9bu2wWLLiG/view?usp=sharing
function Info() {
  return (
    <div className="info">
      <div className="info-title">
        <h2>ABOUT US</h2>
      </div>
      <div className="about-us">
        <div className="about-img">
          <img src="https://res.cloudinary.com/akinleye-paul/image/upload/v1638576689/Tiidelab%20Fellows/tomiwa_wt9s6r.jpg" alt="img"></img>
        </div>
        <div className="about-details">
          <p>Hi there, my name is Enoch Oyebade.</p>
          <p>I'm a wedding and portrait photographer currently residing in Lagos, Nigeria.</p>
          <p>I picked up photography as a hobby in 2014 while studying Electronic and Electrical Engineering in Uni<br/> and it's become an art that I love so much. It’s become something I’m passionate about.
            I delved into shooting weddings in 2021 <br /> and I'm so proud of how far this brand has come.</p>
          <p>At Tomiwa Ajayi Photography, we tell love stories in their most authentic and truest forms <br /> and we're especially known for our clean edits and cinematic grades.</p>
        </div>
      </div>
      <div className="story">
        <h1>MOMENTS TODAY, MEMORIES FOREVER</h1>
        <p>For us, the dream is to tell your story in an eccentric way that sets it apart from others and for you to look back at your pictures light years from now and still reminisce over them as magnificent works of art.</p>
        <p>Every wedding is unique and we infuse this uniqueness into telling each story. We're keen on details and moments and we make sure to be present in every moment of your story to fully capture its essence.</p>
      </div>
    </div>
  )
}

export default Info