import React, { useState, useEffect } from 'react';
import "./eventDetailed.css"
const EventDetails = () => {
    const photoUrl = "https://s3-alpha-sig.figma.com/img/96ca/a65d/a8718d90321f731e0548d32f11b110af?Expires=1697414400&Signature=HpQWrsnJIOalWlx2AhdglgmrvjoqUL6YWc2~Nii05ADGlCwL0HT8QZIXoLTYLScmmRWmOfYgZD0JUnjL1ozpBgMTqFQ9Jn8TVqVaGxuTlrrUaXP7nqT-n9-Oah3FN6MDYokmrhGPWdxNm1h7AuvHz3-aWjB7Wp7wi6f6wBXXLgMhOUPVo~XWXyB2kAo2MBX7t9F7yAKNHXdVmUVchVzxlUfmX65XjfDY2nfEZ~yYl6iFzSj~fTZOy0E3aromBD9P8~rB5dtSHAjP8iTl1XXSclkm7edCowyvrdkgwTpPuLvXvJEYZVAaZW3A12o4VD0pRPAq3414zrfqhTEeQTD7MQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
    
    const logoUrl = "https://s3-alpha-sig.figma.com/img/fa70/7a37/58211ab7b656baa4249555f96594e865?Expires=1697414400&Signature=RFsjSObP7GuAx1A5omelCVLs-sqXFIVP6gH8wFA1FoZAQYgxz-8l9CU85CKButZ9mUVpeKB-TIfqK6L4x~gPez-8wYZUdWLIdekRHFdGX8-jUWb32Zponi5ahTDc6yUVnb4ZNY1VgCX9mFmto64ELKxQlKIBhSCMr6I-uGHAtaUhlXxxB2Le8r8WqNvxsEMMlWCopq5k4vZjUbqXw5DppSFaR8Ryy4i~QyNWrkHDUQ9Gs1KnidutkwBDLVvmaoxqINm-mZPRjpB3DeD2Hg76pF3De5Fo8WP6Ow6ZtmX-BVLtmEisOpvtj9HtRrtariT2Q7lGyey2CoDi586HAbxYFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";


    return (
        <div className='eventdetail mt-4' style={{ padding: "35px" }}>
            <div className='headerSide d-flex justify-content-between'>
                <div>
                    <h1>Beach Cleanup</h1>
                    <h5 className='text-secondary'>Global Green Growth Institute</h5>
                </div>
                <div>
                    <button style={{ 'width': "120px", "border-radius": "13px", backgroundColor: "#1CAE81", color: "white", "font-size": '18px' }} className='btn p-3'>Join</button>
                </div>
            </div>
            <div className='my-3 text-secondary'>
                <i class="fa-solid fa-light fa-calendar-day" style={{ "opacity": '50%' }}></i>
                <span>12.21.1212</span>
            </div>

            <div className='text fs-4'>A beach cleanup activity is an organized event where volunteers gather to remove litter and debris from a beach or coastal area. These events are essential for maintaining the health and beauty of our oceans and shores, as well as protecting wildlife and marine ecosystems. Here are some key aspects of beach cleanup activities</div>

            <div className='imageSection'>
                <div className='greenBackground'>
                    <div className='photo' style={{borderRadius:"10px" ,backgroundImage: `url(${photoUrl})` }}></div>
                    <div className='logo' style={{ backgroundImage: `url(${logoUrl})` }}></div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails