import React from 'react'
import "./event.css"
import { Link } from "react-router-dom"

const Event = () => {
  return (
    <div>
      <div class="event-page mt-4 container">
        <div class="event-header container">
          <h1 class="page-title">Upcoming Events</h1>
          <div class="search-bar">
            <input type="text" placeholder="Search..." class="search-input" />
            <i class="fas fa-search"></i>
          </div>
        </div>
        <h2 class="section-title container">Featured Events</h2>
        <div class="mt-5 event-cards ">
          <div className='row'>
            <div className='col-lg-4 col-md-12'>
              <div class="event-card">
                <img
                  width='150'
                  src="https://s3-alpha-sig.figma.com/img/96ca/a65d/a8718d90321f731e0548d32f11b110af?Expires=1697414400&Signature=HpQWrsnJIOalWlx2AhdglgmrvjoqUL6YWc2~Nii05ADGlCwL0HT8QZIXoLTYLScmmRWmOfYgZD0JUnjL1ozpBgMTqFQ9Jn8TVqVaGxuTlrrUaXP7nqT-n9-Oah3FN6MDYokmrhGPWdxNm1h7AuvHz3-aWjB7Wp7wi6f6wBXXLgMhOUPVo~XWXyB2kAo2MBX7t9F7yAKNHXdVmUVchVzxlUfmX65XjfDY2nfEZ~yYl6iFzSj~fTZOy0E3aromBD9P8~rB5dtSHAjP8iTl1XXSclkm7edCowyvrdkgwTpPuLvXvJEYZVAaZW3A12o4VD0pRPAq3414zrfqhTEeQTD7MQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="Event 1"
                  class="card-image"
                />
                <div class="card-info">
                  <div class="circle-logo">
                    <img src="https://s3-alpha-sig.figma.com/img/96ca/a65d/a8718d90321f731e0548d32f11b110af?Expires=1697414400&Signature=HpQWrsnJIOalWlx2AhdglgmrvjoqUL6YWc2~Nii05ADGlCwL0HT8QZIXoLTYLScmmRWmOfYgZD0JUnjL1ozpBgMTqFQ9Jn8TVqVaGxuTlrrUaXP7nqT-n9-Oah3FN6MDYokmrhGPWdxNm1h7AuvHz3-aWjB7Wp7wi6f6wBXXLgMhOUPVo~XWXyB2kAo2MBX7t9F7yAKNHXdVmUVchVzxlUfmX65XjfDY2nfEZ~yYl6iFzSj~fTZOy0E3aromBD9P8~rB5dtSHAjP8iTl1XXSclkm7edCowyvrdkgwTpPuLvXvJEYZVAaZW3A12o4VD0pRPAq3414zrfqhTEeQTD7MQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Circle Logo" class="circle-logo-image" />
                    <h3 class="card-title">Event </h3>
                  </div>
                  <span class="event-date">17.05.2005</span>
                </div>
                <p class="card-description">
                  Description for Event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className=' w-100 btn btn-success'>
                  <Link className='text-decoration-none text-white' to="/events/1">Read More</Link>
                </button>
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <div class="event-card">
                <img
                  width='150'
                  src="https://s3-alpha-sig.figma.com/img/96ca/a65d/a8718d90321f731e0548d32f11b110af?Expires=1697414400&Signature=HpQWrsnJIOalWlx2AhdglgmrvjoqUL6YWc2~Nii05ADGlCwL0HT8QZIXoLTYLScmmRWmOfYgZD0JUnjL1ozpBgMTqFQ9Jn8TVqVaGxuTlrrUaXP7nqT-n9-Oah3FN6MDYokmrhGPWdxNm1h7AuvHz3-aWjB7Wp7wi6f6wBXXLgMhOUPVo~XWXyB2kAo2MBX7t9F7yAKNHXdVmUVchVzxlUfmX65XjfDY2nfEZ~yYl6iFzSj~fTZOy0E3aromBD9P8~rB5dtSHAjP8iTl1XXSclkm7edCowyvrdkgwTpPuLvXvJEYZVAaZW3A12o4VD0pRPAq3414zrfqhTEeQTD7MQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="Event 1"
                  class="card-image"
                />
                <div class="card-info">
                  <div class="circle-logo">
                    <img src="https://s3-alpha-sig.figma.com/img/96ca/a65d/a8718d90321f731e0548d32f11b110af?Expires=1697414400&Signature=HpQWrsnJIOalWlx2AhdglgmrvjoqUL6YWc2~Nii05ADGlCwL0HT8QZIXoLTYLScmmRWmOfYgZD0JUnjL1ozpBgMTqFQ9Jn8TVqVaGxuTlrrUaXP7nqT-n9-Oah3FN6MDYokmrhGPWdxNm1h7AuvHz3-aWjB7Wp7wi6f6wBXXLgMhOUPVo~XWXyB2kAo2MBX7t9F7yAKNHXdVmUVchVzxlUfmX65XjfDY2nfEZ~yYl6iFzSj~fTZOy0E3aromBD9P8~rB5dtSHAjP8iTl1XXSclkm7edCowyvrdkgwTpPuLvXvJEYZVAaZW3A12o4VD0pRPAq3414zrfqhTEeQTD7MQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Circle Logo" class="circle-logo-image" />
                    <h3 class="card-title">Event </h3>
                  </div>
                  <span class="event-date">17.05.2005</span>
                </div>
                <p class="card-description">
                  Description for Event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className=' w-100 btn btn-success'>
                  <Link className='text-decoration-none text-white' to="/events/1">Read More</Link>
                </button>
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <div class="event-card">
                <img
                  width='150'
                  src="https://s3-alpha-sig.figma.com/img/96ca/a65d/a8718d90321f731e0548d32f11b110af?Expires=1697414400&Signature=HpQWrsnJIOalWlx2AhdglgmrvjoqUL6YWc2~Nii05ADGlCwL0HT8QZIXoLTYLScmmRWmOfYgZD0JUnjL1ozpBgMTqFQ9Jn8TVqVaGxuTlrrUaXP7nqT-n9-Oah3FN6MDYokmrhGPWdxNm1h7AuvHz3-aWjB7Wp7wi6f6wBXXLgMhOUPVo~XWXyB2kAo2MBX7t9F7yAKNHXdVmUVchVzxlUfmX65XjfDY2nfEZ~yYl6iFzSj~fTZOy0E3aromBD9P8~rB5dtSHAjP8iTl1XXSclkm7edCowyvrdkgwTpPuLvXvJEYZVAaZW3A12o4VD0pRPAq3414zrfqhTEeQTD7MQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="Event 1"
                  class="card-image"
                />
                <div class="card-info">
                  <div class="circle-logo">
                    <img src="https://s3-alpha-sig.figma.com/img/96ca/a65d/a8718d90321f731e0548d32f11b110af?Expires=1697414400&Signature=HpQWrsnJIOalWlx2AhdglgmrvjoqUL6YWc2~Nii05ADGlCwL0HT8QZIXoLTYLScmmRWmOfYgZD0JUnjL1ozpBgMTqFQ9Jn8TVqVaGxuTlrrUaXP7nqT-n9-Oah3FN6MDYokmrhGPWdxNm1h7AuvHz3-aWjB7Wp7wi6f6wBXXLgMhOUPVo~XWXyB2kAo2MBX7t9F7yAKNHXdVmUVchVzxlUfmX65XjfDY2nfEZ~yYl6iFzSj~fTZOy0E3aromBD9P8~rB5dtSHAjP8iTl1XXSclkm7edCowyvrdkgwTpPuLvXvJEYZVAaZW3A12o4VD0pRPAq3414zrfqhTEeQTD7MQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Circle Logo" class="circle-logo-image" />
                    <h3 class="card-title">Event </h3>
                  </div>
                  <span class="event-date">17.05.2005</span>
                </div>
                <p class="card-description">
                  Description for Event 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className=' w-100 btn btn-success'>
                  <Link className='text-decoration-none text-white' to="/events/1">Read More</Link>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Event