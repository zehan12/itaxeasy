import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container widthfull">
        <div>
          <h1>About Us</h1>
          <p>Know Who We Are</p>

          <div className="start">
            <div>
              <a className="arrow" href="">
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
            <div>
              <a className="start-arrow" href="#">
                Get Start
              </a>
            </div>
          </div>
        </div>


        <div className="flex justify  choose hero-fix">
        <div className="hero-child">
            <h2>Why choose ItaxEast for your company webside?</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.illo eveniet voluptatem aut praesentium pariatur
              qui dicta ut similique. Rem assumenda doloribus, maiores hic repellat odio praesentium numquam eveniet
              aperiam qui dicta ut similique. Rem assumenda doloribus.</p>
            <a className="btn" href="#">
              Learn More
            </a>
          </div>

          <div className="hero-child-item">
            <nav className="hero-child-nav">
              <a href="#"><i class="far fa-copy"></i></a>
            </nav>
            <h2>Corporis voluplates sit</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="hero-child-item ">
            <nav className="hero-child-nav">
              <a href="#"><i class="far fa-copy"></i></a>
            </nav>
            <h2>Corporis voluplates sit</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="hero-child-item ">
            <nav className="hero-child-nav">
              <a href="#"><i class="far fa-copy"></i></a>
            </nav>
            <h2>Corporis voluplates sit</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
