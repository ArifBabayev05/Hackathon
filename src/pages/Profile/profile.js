import React from 'react';
import './profile.css'; // Create this CSS file for styling
import ProfImage from "../../assets/images/home.png"
import { Link } from 'react-router-dom';
import Card from '../../components/communityCard/Card';



const Profile = () => {
    return (
        <div className="profile-page">
            <div className="profile-info d-flex justify-content-between">
                <div className='d-flex'>
                    <img src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="Profile" className="profile-photo" />
                    <h1 className="profile-name align-items-center d-flex">Test Testov</h1>
                </div>

                <button className="edit-profile-button">Edit Profile</button>
            </div>

            <div className="community-section">
                <h2 className="community-title mt-2">Communities</h2>
                <div className="d-flex">
                    <div className='row'>
                        <div className='col-lg-4'>
                            <Link className='text-decoration-none' to='/community-detail'><Card imageUrl="https://s3-alpha-sig.figma.com/img/7d21/ce38/4086b4c4674fc4465385e36608faff71?Expires=1697414400&Signature=AbIxqmn-Ygh2Vcg1E0e~~7TaIYUrvONoedyWJJ4r9Lu8oS9Vzeqof-MxIFKsu8Yh8oU4rkr82YfCTrbe~GWJFoOnDIhVoLzeoR4O1u0P5zSMTeXw3RJVKxh5Jrml6lyAmnurJZzBltw~PTRGp8~WxoGLzoEg~YjEstjGi2qDIMVqE8pw7IFF6BJDfD0uBlicuCIVAzEsm-3noZmCYAg3TR1DDm8hoCo4SgF6Rs47PSVnd7dY8onG8DIJp-b~O0LtZIuDaC~5fSyVFJfQxV6VmML4I~GqrEhgLC-HDEIuBdOoHxPOjUrwzAQPBDTOTfn1koaGfUH0-ftwaqYxcn0vxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                             name="World Wildlife Fund" /></Link>
                        </div>
                        <div className='col-lg-4'>
                            <Link className='text-decoration-none' to='/community-detail'><Card imageUrl='https://s3-alpha-sig.figma.com/img/e4f0/28c9/29c0272a5ecefd1d3ce5f77708302a28?Expires=1697414400&Signature=cIoMsCg1SvRV4JlEKetyr4dcPsTqwEa0CKjIsvyVPvhhxTY5q67lxMDIWJsVcwLtyKw9sqnwDvWqD5WIfuU21z8q19KICLLB0KM-MuNjmmrucHVuGqJ6CpzjxRl6GrYloDnUNUWRpoVSFzeCnThnOW3g7E96q-VQ-or~BAtPIml7Nmp3dqcaMT1SrCQyL3GtHmXfgINdaEgh1YUpFAnZYwWB59Z4~YzDKwBGTkQEIVgs3v3LrM00S02hoJPI-tIl0l3e9TL11sfBde1zdONymVyYT69UHNlohQQTzTg4YsE1O2oYUfLWl8pEdXEE~vftMbYrASPH6AAhfUVa5em3yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                             name="World Wildlife Fund" /></Link>
                        </div>
                        <div className='col-lg-4'>
                            <Link className='text-decoration-none' to='/community-detail'><Card imageUrl='https://s3-alpha-sig.figma.com/img/575c/c6a6/11b5bb0512e1f081572e10c561fd5d18?Expires=1697414400&Signature=Xy4sDflBnPVQ1z~Ot0r80v8Xg~3M1dKv0yWYL28Wo-A3bY~yBuOo5gBw4EPqgAQ0b7ueLkNUW~yeHb2cytp2Qen-XFEORle6W8ixI8kjt-6Bajh-7y3eJ5YgL1AtRr8s6R9CcVmfuKjAd3NDUtdSG69hXjmyC9Fjryijr2uIGdTMO3aP8USUE0FpyLJ9UfnUBuL958hPJClQsk-wetHdQEwboKi8QhPYxihNDPteHgE0O7i1Psw6WnCjslvKK3ly760gNwdKBLmMPFJT9Wn1NUSB8daImSlNBeuQ75yFwRWIBkI81BKBaiuYqahLR-hZszV0JIpVcQM880kHLvvf2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            name="World Wildlife Fund" /></Link>
                        </div>
                        <div className='col-lg-4'>
                            <Link className='text-decoration-none' to='/community-detail'><Card imageUrl='https://s3-alpha-sig.figma.com/img/f56c/0ade/f4f6ae4b1efd2cc8f3344bfba7920dd9?Expires=1697414400&Signature=cMibSv3qXlEv5V5U8csxaR5KqIccD7nUyyDbLIJbRTMhnqXTOOrHCZ0BC4pqyNBX4fZZy6V8fXt3CE0iP94pzMn3Wu07uIgZiQ5PwqFdaXhs59W8frZ8e6c8RNU9CP8hCP2LYwIyk-~ZfrqDT4rsZDneJPyoUTuHj7bhEK8kCz-pYqn2E9Vcjh23sV~2Tf2ugb4ZLlzGr4jwRe6G-I4SEfkQVAP72W3KYB7fafupfGnPkLOEULWEc0-5HLPZlbrcOodp1aOWXfkzA4ensH9mfbsMM23n0NAAoQ1qyIsQcOzkudPTY5JySOW0WEUeK4aZkUkvF4~5aeH3ozUQfHmS6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            name="World Wildlife Fund" /></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
