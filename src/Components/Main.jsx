import React from "react";
import Aboutimage from "../images/about-img.jpg";

function Main() {
  return (
    <section className="side-bg">
      <div className="container flex order-1">
        <div className="flex-40 adjust">
          <img className="widthfull" src={Aboutimage} alt="About-play" />

          <div className="play">
            <nav>
              <a href="#">
                <i class="fas fa-play"></i>
              </a>
            </nav>
          </div>
        </div>

        <div className="flex-50">
          <div className="about">
            <h3>About us</h3>
            <h2>Enim quis est voluptatibus aliquid consequatur fugiat</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              possimus aperiam neque reiciendis earum dolorem ullam obcaecati ad
              nam omnis sed exercitationem voluptatum nemo tempora, eos cum
              laborum? Doloribus, deleniti?
            </p>
            <div className="flex adj">
              <nav className="fingerprint-nav flex-10 red">
                <a href="#">
                  <i class="fas fa-fingerprint"></i>
                </a>
              </nav>

              <div className="flex-85">
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex">
              <nav className="fingerprint-nav flex-10">
                <a href="#">
                  <i class="fas fa-gift"></i>
                </a>
              </nav>
              <div className="flex-85">
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex ">
              <nav className="fingerprint-nav flex-10">
                <a href="#">
                  <i class="fab fa-react"></i>
                </a>
              </nav>
              <div className="flex-85">
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
