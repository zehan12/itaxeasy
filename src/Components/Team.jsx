import React from 'react'
import Image1 from '../images/testimonials-1.jpg'
import Image2 from '../images/testimonials-2.jpg'
import Image3 from '../images/testimonials-3.jpg'
import Image4 from '../images/testimonials-4.jpg'
import Image5 from '../images/testimonials-5.jpg'

function Team() {
  return (
    <section className='testimonials padding'>
       <div className="testimonial-cover">
        <div className="testimonial">
          <div className="image-testimonial">
            <img className="" src={Image1} alt="Testimonial" />
          </div>
          <cite>Maqbool Khan</cite>
          <p>Product Manager</p>
          <blockquote>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quos
            harum aspernatur eaque, nulla deserunt. Incidunt non magnam
            unde<br />
            architecto itaque eos odio obcaecati libero harum expedita
            voluptatum, amet ducimus!
          </blockquote>
        </div>

        <div className="testimonial">
          <div className="image-testimonial">
            <img className="fullwidth" src={Image2} alt="Testimonial" />
          </div>
          <cite>Lisa Ray</cite>
          <p>CEO</p>
          <blockquote>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quos
            harum aspernatur eaque, nulla deserunt. Incidunt non magnam
            unde<br />
            architecto itaque eos odio obcaecati libero harum expedita
            voluptatum, amet ducimus!
          </blockquote>
        </div>

        <div className="testimonial">
          <div className="image-testimonial">
            <img className="fullwidth" src={Image3} alt="Testimonial" />
          </div>
          <cite>John Hamilton</cite>
          <p>CFO</p>
          <blockquote>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quos
            harum aspernatur eaque, nulla deserunt. Incidunt non magnam
            unde<br />
            architecto itaque eos odio obcaecati libero harum expedita
            voluptatum, amet ducimus!
          </blockquote>
        </div>

        <div className="testimonial">
          <div className="image-testimonial">
            <img className="fullwidth" src={Image4} alt="Testimonial" />
          </div>
          <cite>Santosh Singh</cite>
          <p>CTO</p>
          <blockquote>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quos
            harum aspernatur eaque, nulla deserunt. Incidunt non magnam
            unde<br />
            architecto itaque eos odio obcaecati libero harum expedita
            voluptatum, amet ducimus!
          </blockquote>
        </div>

        <div className="testimonial">
          <div className="image-testimonial">
            <img className="fullwidth" src={Image5} alt="Testimonial" />
          </div>
          <cite>Jena Karlis</cite>
          <p>Owener</p>
          <blockquote>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quos
            harum aspernatur eaque, nulla deserunt. Incidunt non magnam
            unde<br />
            architecto itaque eos odio obcaecati libero harum expedita
            voluptatum, amet ducimus!
          </blockquote>
        </div>
      </div>

      <div class="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="round"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

    </section>
  )
}

export default Team