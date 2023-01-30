import React from 'react';
import Team1 from '../images/team-1.jpg'
import Team2 from '../images/team-2.jpg'
import Team3 from '../images/team-3.jpg'
import Team4 from '../images/team-4.jpg'

function Feature() {
  return (
   <section className='team padding'>
    <div className="container">
        <header className="sub-header">
          <h4>Team</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate fugit non id, illum natus dolorum, consectetur eligendi
            soluta amet laboriosam ipsa suscipit distinctio quam quo, dicta
            aperiam eum sequi ipsum!
          </p>
        </header>
      </div>

      <div className="container members flex flex-wrap">
        <div className="member flex-20 shadow">
          <img src={Team1} alt="team-1" />
          <div className="img-base">
            <cite>Walter White</cite>
            <p>CEO</p>
          </div>
          <div className="hidden flex flex-center">
            <a href="#"><i class="fab fa-facebook-square"></i></a>
            <a href="#"><i class="fab fa-twitter-square"></i></a>
            <a href="#"><i class="fab fa-instagram-square"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="member flex-20 shadow">
          <img src={Team2} alt="team-2" />
          <div className="img-base">
            <cite>Sarah Johnson</cite>
            <p>CTO</p>
          </div>
          <div className="hidden flex flex-center">
            <a href="#"><i class="fab fa-facebook-square"></i></a>
            <a href="#"><i class="fab fa-twitter-square"></i></a>
            <a href="#"><i class="fab fa-instagram-square"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="member flex-20 shadow">
          <img src={Team3} alt="team-3" />
          <div className="img-base">
            <cite>William Anderson</cite>
            <p>CFO</p>
          </div>
          <div className="hidden flex flex-center">
            <a href="#"><i class="fab fa-facebook-square"></i></a>
            <a href="#"><i class="fab fa-twitter-square"></i></a>
            <a href="#"><i class="fab fa-instagram-square"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="member flex-20 shadow">
          <img src={Team4} alt="team-4" />
          <div className="img-bass">
            <cite>Amanda Jepson</cite>
            <p>Product Manager</p>
          </div>
          <div className="hidden flex flex-center">
            <a href="#"><i class="fab fa-facebook-square"></i></a>
            <a href="#"><i class="fab fa-twitter-square"></i></a>
            <a href="#"><i class="fab fa-instagram-square"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

   </section>
  )
}

export default Feature;