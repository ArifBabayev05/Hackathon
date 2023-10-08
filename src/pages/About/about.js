import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Import your carousel library
import "./about.css"
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Add carousel styles

import logo from '../../assets/images/logo2.png'; // Import your logo
import partner1 from '../../assets/images/1.png';
import partner2 from '../../assets/images/2.png';
import partner3 from '../../assets/images/3.png';
import partner4 from '../../assets/images/4.png';
import partner5 from '../../assets/images/5.png';
import partner6 from '../../assets/images/6.png';
import partner7 from '../../assets/images/7.png';
import partner8 from '../../assets/images/8.png';
import partner9 from '../../assets/images/9.jpeg';

import img from "../../assets/images/tel.png"


const About = () => {

  return (
    <div className=''>
      <div className='d-flex my-5 justify-content-center'>
        <img src={logo} width="250" />
      </div>

      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <div className='text mx-5 mb-5'>
            <p>

              <li>About Our Initiative</li>
              <p>
                Welcome to our platform, where we connect people, causes, and communities. Our mission is to empower you to engage in social activities, contribute to meaningful causes, and discover vibrant communities.
              </p>
              <li>Our Vision</li>
              <p>
                We envision a connected world where colective action drives positive change. Our platform bridges individuals, organizations, and government agencies, fostering collaboration for a better future.
              </p>
              <li>Join Us</li>
              <p>
                Join our community of changemakers, where you can explore social activities, support causes, and connect with others who share your passion for change.
              </p>
              <li>Supporting Causes</li>
              <p>Discover opportunities to support local and global initiatives, volunteer for community projects, and stay informed about social issues that matter to you.</p>

              <li>Get Involved</li>
              Turn your aspirations into action with us. Join our platform, be a part of positive change, and make a difference in the world.
              <br />
            </p>
          </div>
        </div>

        <div className='col-md-6 col-sm-12 d-flex justify-content-center'>
          <img style={{ 'width': '400px' }} src={img} s />
        </div>

      </div>

      <h2 className='m-5'>OUR PARTNERS</h2>
      <div className="carousel-menu mt-5" style={{"margin-bottom":'150px'}}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          showIndicators={false}
          centerMode
          centerSlidePercentage={100 / 5}
        >
          {/* Circular menu items */}
          <div className="menu-item">
            <img src={partner1} width='50' className='partnerLogo' />
          </div>

          <div className="menu-item">
            <img src={partner2} width='50' className='partnerLogo' />
          </div>
          <div className="menu-item">
            <img src={partner3} width='50' className='partnerLogo' />
          </div>

          <div className="menu-item">
            <img src={partner5} width='50' className='partnerLogo' />
          </div>
          <div className="menu-item">
            <img src={partner6} width='50' className='partnerLogo' />
          </div>
          <div className="menu-item">
            <img src={partner7} width='50' className='partnerLogo' />
          </div>
          <div className="menu-item">
            <img src={partner8} width='50' className='partnerLogo' />
          </div>
          <div className="menu-item">
            <img src={partner9} width='50' className='partnerLogo' />
          </div>
        </Carousel>
      </div>
      <div style={{"margin-top":"30px"}} className='d-flex'></div>
    </div>
  );
};

export default About;
