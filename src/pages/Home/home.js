import React from 'react';
import './home.css'; // Import your CSS file for Home component
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home">
      <div className="image-section">
        <img
          src="https://i.ibb.co/YhQTt13/home.png"
          alt="Home"
          className="background-image"
        />
        <h2 className="image-title">Rooting for a Greener Tomorrow: 100K Trees,<br /> One Event, One Earth!</h2>
        <div className="organization-container">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqiTfyBR0xyGy0F7XwqeulXnINzy0jVSKZbUk4aaE_Z3DfW7Y5"
            alt="Circular Photo"
            className="circular-photo"
          />
          <span className="organization-name">Sağlam Düşüncə Gənclər Təşkilatı</span>
        </div>
        <span className="organization-subname">Event</span>
        <button className='btn btn-success joinButton'>
          Join
        </button>
      </div>
      <div className="gradient-bottom"></div> {/* Empty div for gradient */}

      <div className="cards-section container p-relative">
        <div className='d-flex container justify-content-between'>
          <h3 className="section-title">Upcoming Events</h3>
          <Link style={{textDecoration:"none"}} to="/post">
            <span>See All</span>
          </Link>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/events/1" style={{ textDecoration: "none" }}>
              <div className="custom-card text-dark">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Event 1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src="https://via.placeholder.com/50" // Replace with your circle-photo rounded-circleimage URL
                        alt="Circle Photo"
                        className=" rounded-circle circle-photo"
                      />
                    </div>
                    <div className="col-6">
                      <h5 className="card-title fw-bold">Arbor Day</h5>
                      <p className="card-text" style={{ "font-size": '11px' }}>Wetlands International </p> {/* Replace with the actual time */}
                    </div>
                    <div className="col-3">
                      <span style={{ "font-size": '10px' }}>17.05.2022</span>
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/events/1" style={{ textDecoration: "none" }}>
              <div className="custom-card text-dark">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Event 1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src="https://via.placeholder.com/50" // Replace with your circle-photo rounded-circleimage URL
                        alt="Circle Photo"
                        className="circle-photo rounded-circle"
                      />
                    </div>
                    <div className="col-6">
                      <h5 className="card-title fw-bold">Arbor Day</h5>
                      <p className="card-text" style={{ "font-size": '11px' }}>Wetlands International </p> {/* Replace with the actual time */}
                    </div>
                    <div className="col-3">
                      <span style={{ "font-size": '10px' }}>17.05.2022</span>
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/events/1" style={{ textDecoration: "none" }}>
              <div className="custom-card text-dark">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Event 1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src="https://via.placeholder.com/50" // Replace with your circle-photo rounded-circleimage URL
                        alt="Circle Photo"
                        className="rounded-circle circle-photo"
                      />
                    </div>
                    <div className="col-6">
                      <h5 className="card-title fw-bold">Arbor Day</h5>
                      <p className="card-text" style={{ "font-size": '11px' }}>Wetlands International </p> {/* Replace with the actual time */}
                    </div>
                    <div className="col-3">
                      <span style={{ "font-size": '10px' }}>17.05.2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>


        </div>
      </div>


    </div >
  );
};

export default Home;
