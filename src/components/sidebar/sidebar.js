import React from 'react'
import "../../assets/styles/sidebar.css"
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

  const location = useLocation();
  const isActive = (pathname) => {
    return location.pathname === pathname ? 'active' : '';
  };
  return (
    <div className="sidebar">
      <div className="profile">
        <img style={{ width: "200px", height: "200px", position: "absolute", left: "22px", top: '-40px', zIndex: -1 }} src="https://s3-alpha-sig.figma.com/img/fa70/7a37/58211ab7b656baa4249555f96594e865?Expires=1697414400&Signature=RFsjSObP7GuAx1A5omelCVLs-sqXFIVP6gH8wFA1FoZAQYgxz-8l9CU85CKButZ9mUVpeKB-TIfqK6L4x~gPez-8wYZUdWLIdekRHFdGX8-jUWb32Zponi5ahTDc6yUVnb4ZNY1VgCX9mFmto64ELKxQlKIBhSCMr6I-uGHAtaUhlXxxB2Le8r8WqNvxsEMMlWCopq5k4vZjUbqXw5DppSFaR8Ryy4i~QyNWrkHDUQ9Gs1KnidutkwBDLVvmaoxqINm-mZPRjpB3DeD2Hg76pF3De5Fo8WP6Ow6ZtmX-BVLtmEisOpvtj9HtRrtariT2Q7lGyey2CoDi586HAbxYFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Profile Image" className="profile-circle" />
        {/* <div className="profile-name">Your Name</div> */}
      </div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            <i className="fa-sharp fa-solid fa-house" style={{ "opacity": '50%' }}></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/post" className={`nav-link ${isActive('/post')}`}>
            <i className="fa-sharp fa-regular fa-compass" style={{ "opacity": '50%' }}></i>
            <span>Explore</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Map" className={`nav-link ${isActive('/Map')}`}>
            <i className="fa-sharp fa-regular fa-map" style={{ "opacity": '50%' }}></i>
            <span>Map</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/events" className={`nav-link ${isActive('/events')}`}>
            <i className="fa-solid fa-light fa-calendar-day" style={{ "opacity": '50%' }}></i>
            <span>Events</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
            <i className=" fa-solid fa-light fa-phone" style={{ "opacity": '50%' }}></i>
            <span>Contact</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>
            <i className="fa-solid fa-circle-info" style={{ "opacity": '50%' }}></i>
            <span>About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/donate" className={`nav-link ${isActive('/donate')}`}>
            <i className="fa-solid fa-coins" style={{ "opacity": '50%' }}></i>
            <span>Donate</span>
          </Link>
        </li>
      </ul>
      <Link to='/profile' className='text-decoration-none text-secondary'>
        <div className="profile  ">
          <img style={{ width: "50px", height: "50px", position: "absolute", left: "50px", top: '598px', zIndex: -1 }} src="https://s3-alpha-sig.figma.com/img/4b85/ca3c/e568747c07fac306a24ac264ae884e47?Expires=1697414400&Signature=WEIOqHbqOmMBkbgpF52s2FEzouRacqU29FT0OCRSJQXj~fD1dvbNNkYD8H2hDn8r55KJ0RPEqKjap181uSmkzXVZ2bRMSpds53TtjbETHCuKLNlAcSEBUL-1My8gmCVceEQUZfeYQW6Ri0fW5iVnaCSvem7XjsWDk8uX6VNXWLGm~GoGDdmfEfQYG35UIbdcQC9e8V4a6~wOEGZd6-VUSNDHRckh4KdkBdpjRk4jSbv725sIJhHJPFOsOhBG1V3sNy2M~7pFLFYx8730OvxM6CcP~crcuNZ~8tpSw3nZYS328OEgoSMMR2CO~G4IX8esyav~NX5Qx3XNWvfDL6~oQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Profile Image" className="profile-circle" />
          <div style={{position: "relative",left:"30px"}} className="text-decoration-none profile-name">Subhan I.</div>
        </div>
      </Link>
    </div>


  )
}

export default Sidebar