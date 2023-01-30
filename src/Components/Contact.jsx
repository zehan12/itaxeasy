import React from "react";

function Contact() {
  return (
    <section className="contact padding xml">
      <header className="sub-header">
        <div className="container">
          <h4>Contact</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            fugit non id, illum natus dolorum, consectetur eligendi soluta amet
            laboriosam ipsa suscipit distinctio quam quo, dicta aperiam eum
            sequi ipsum!
          </p>
        </div>
      </header>

      <div className="container flex contact-mq">
        <div className="flex-35 shadow contact-box">
          <h6>
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            Our Address
          </h6>
          <address>A108, Adam Street, New York,NY58345</address>
        </div>
        <div className="flex-35 shadow contact-box">
          <h6>
            <span>
              <i class="far fa-envelope"></i>
            </span>
            Email Us
          </h6>
          <a href="mailto:contact@example.com">contact@example.com</a>
        </div>
        <div className="flex-35 shadow contact-box">
          <h6>
            <span>
              <i class="fas fa-phone-volume"></i>
            </span>
            <small>Call Us</small>
          </h6>
          <a href="tel:+91-9389732668">+919812563789</a>
        </div>
      </div>

      <div className="shadow padding-1 ">
        <form action="index.html" method="POST">
          <input id="name" type="text" placeholder="Your Name" required />
          <input id="email" type="email" placeholder="Your Email" required />
          <input id="subject" type="text" placeholder="Subject" />
          <textarea rows="10" placeholder="Message"></textarea>
          <a className="btn-1" href="#">
            Send Message
          </a>
        </form>
      </div>
    </section>
  );
}

export default Contact;
