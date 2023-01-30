import React from 'react'
import aboutimage from "../images/experience.jpg"

function Experience() {
  return (
    <div id='about'>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>5 Years Experience</h1>
        <p>We are hire for Easy Finance for India tax payers</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ipsam mollitia nam velit, aperiam voluptatibus aspernatur excepturi, inventore, minus libero accusantium autem. Sunt, sit voluptas.</p>
        <button>LEARN MORE</button>
      </div>
    </div>
  )
}

export default Experience;