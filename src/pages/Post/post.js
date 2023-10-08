import React from 'react'
import { Link } from 'react-router-dom'
import "./post.css"

const Post = () => {
  return (
    <div className='post1'>
      <div className="image-section1">

        <img
          height='10'
          src="https://s3-alpha-sig.figma.com/img/e731/140c/b9274eaaec93f6096cbd3cc7973bb664?Expires=1697414400&Signature=mOmsdKrf8cvIS4XTMj~azFWZLy2ZZt~L3s0TRcnrJ85ud8hvZB3jgz5pc1bnlAnY~yud5UI3COPaCP4iJHeSGPrV7we8wLEm13P-IJIxisbmuiCddbaRCzoyaHSGeWQyu9InPg-Zf6kkiorVvpbHkztYBXBQg9b3JAoOy1Qa6lSndDULxSKlAbrDhdQsmVZATNxwnzoi9XlR-RTRcg5eO35B9ciFC5tEsMD6KtXxt20HkWk-lBHnFR7mB5Bgn7~CE~ryf1J75zKFpQVwbt1XdPibi1rPDWDfDExmhxN8EEQQwyt4iJMgPZTjbBLqQEiGAEtqI9ohMr20Z5GY96KrcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Home"
          className="background-image1"
        />
        <div class="search-bar">
          <input type="text" placeholder="Search..." class="search-input"/>
            <i class="fas fa-search"></i>
        </div>

        <div className='d-flex w-100 justify-content-between'>
          <h2 className="image-title1">Featured Communities</h2>
          <Link to="/events">
            <span className='image-title2'>See All</span>
          </Link>
        </div>
        <Link to='/events'>
          <div className="organization-container1">
            <img
              src="https://s3-alpha-sig.figma.com/img/7d21/ce38/4086b4c4674fc4465385e36608faff71?Expires=1697414400&Signature=AbIxqmn-Ygh2Vcg1E0e~~7TaIYUrvONoedyWJJ4r9Lu8oS9Vzeqof-MxIFKsu8Yh8oU4rkr82YfCTrbe~GWJFoOnDIhVoLzeoR4O1u0P5zSMTeXw3RJVKxh5Jrml6lyAmnurJZzBltw~PTRGp8~WxoGLzoEg~YjEstjGi2qDIMVqE8pw7IFF6BJDfD0uBlicuCIVAzEsm-3noZmCYAg3TR1DDm8hoCo4SgF6Rs47PSVnd7dY8onG8DIJp-b~O0LtZIuDaC~5fSyVFJfQxV6VmML4I~GqrEhgLC-HDEIuBdOoHxPOjUrwzAQPBDTOTfn1koaGfUH0-ftwaqYxcn0vxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Circular Photo"
              className="circular-photo1"
            />
            <p className='photoText1'>World Wildlife Fund</p>
          </div>
        </Link>
        <Link to='/events'>
          <div className="organization-container1">
            <img
              src="https://s3-alpha-sig.figma.com/img/575c/c6a6/11b5bb0512e1f081572e10c561fd5d18?Expires=1697414400&Signature=Xy4sDflBnPVQ1z~Ot0r80v8Xg~3M1dKv0yWYL28Wo-A3bY~yBuOo5gBw4EPqgAQ0b7ueLkNUW~yeHb2cytp2Qen-XFEORle6W8ixI8kjt-6Bajh-7y3eJ5YgL1AtRr8s6R9CcVmfuKjAd3NDUtdSG69hXjmyC9Fjryijr2uIGdTMO3aP8USUE0FpyLJ9UfnUBuL958hPJClQsk-wetHdQEwboKi8QhPYxihNDPteHgE0O7i1Psw6WnCjslvKK3ly760gNwdKBLmMPFJT9Wn1NUSB8daImSlNBeuQ75yFwRWIBkI81BKBaiuYqahLR-hZszV0JIpVcQM880kHLvvf2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Circular Photo"
              className="circular-photo2"
            />
            <p className='photoText2'>World Wildlife Fund</p>

          </div>
        </Link>
        <Link to='/events'>
          <div className="organization-container1">
            <div className='whiteCircle'></div>
            <img
              src="https://s3-alpha-sig.figma.com/img/e4f0/28c9/29c0272a5ecefd1d3ce5f77708302a28?Expires=1697414400&Signature=cIoMsCg1SvRV4JlEKetyr4dcPsTqwEa0CKjIsvyVPvhhxTY5q67lxMDIWJsVcwLtyKw9sqnwDvWqD5WIfuU21z8q19KICLLB0KM-MuNjmmrucHVuGqJ6CpzjxRl6GrYloDnUNUWRpoVSFzeCnThnOW3g7E96q-VQ-or~BAtPIml7Nmp3dqcaMT1SrCQyL3GtHmXfgINdaEgh1YUpFAnZYwWB59Z4~YzDKwBGTkQEIVgs3v3LrM00S02hoJPI-tIl0l3e9TL11sfBde1zdONymVyYT69UHNlohQQTzTg4YsE1O2oYUfLWl8pEdXEE~vftMbYrASPH6AAhfUVa5em3yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Circular Photo"
              className="circular-photo3"
            />
            <p className='photoText3'>World Wildlife Fund</p>

          </div>
        </Link>
        <Link to='/events'>
          <div className="organization-container1">
            <img
              src="https://s3-alpha-sig.figma.com/img/ce1e/6c8d/5e8980128b1a95c4d108f81158f64ab2?Expires=1697414400&Signature=cr71NvSFwcsvLIiprQ7rywZdrZuZOen6K5ke-48ojVKAUdnFs3eiVBBfPO9101ig23f5Hymu99SfieX-No5NAMcwJWEWaTg2Cd7xFCwjWiqnSOVHjt4DzQB0COGO8gIqtT7pxHvKqOyVG0DQENN4vENnO9A~zK3NUuk5bbMhqxkn9sFCAo~~acvWl6ortT~lEia2GkamBMhEvcCqxX3MpgcuzdcCq8vp86671k0MkH-3~rLTG8KRH6t8ajfYBfwOHr4GjEXzwZXZOEnTBd7BYPnrAkOHoQQVqKFtYbpcIp4m8~DCwZAO-SN3PkaYUkC898UmhnNteFOljSbo5PZMlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Circular Photo"
              className="circular-photo4"
            />
            <p className='photoText4'>World Wildlife Fund</p>

          </div>
        </Link>
      </div>
      <div className="gradient-bottom1"></div> {/* Empty div for gradient */}

      <div className="cards-section1 container p-relative mt-5">
        <div className='d-flex container justify-content-between'>
          <h3 className="section-title1">Upcoming Events</h3>
          <Link style={{ textDecoration: "none" }} to="/post">
            <span>See All</span>
          </Link>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/detail" style={{ textDecoration: "none" }}>
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
                        src="https://via.placeholder.com/50" // Replace with your circle-photo image URL
                        alt="Circle Photo"
                        className="  circle-photo"
                      />
                    </div>
                    <div className="col-6">
                      <h5 className="card-title fw-bold">Arbor Day</h5>
                      <p className="card-text" style={{ "font-size": '11px' }}>Wetlands International </p> {/* Replace with the actual time */}
                    </div>
                    <div className="col-3">
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/detail" style={{ textDecoration: "none" }}>
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
                        src="https://via.placeholder.com/50" // Replace with your circle-photo image URL
                        alt="Circle Photo"
                        className="circle-photo "
                      />
                    </div>
                    <div className="col-6">
                      <h5 className="card-title fw-bold">Arbor Day</h5>
                      <p className="card-text" style={{ "font-size": '11px' }}>Wetlands International </p> {/* Replace with the actual time */}
                    </div>
                    <div className="col-3">
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <Link to="/detail" style={{ textDecoration: "none" }}>
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
                        src="https://via.placeholder.com/50" // Replace with your circle-photo image URL
                        alt="Circle Photo"
                        className=" circle-photo"
                      />
                    </div>
                    <div className="col-6">
                      <h5 className="card-title fw-bold">Arbor Day</h5>
                      <p className="card-text" style={{ "font-size": '11px' }}>Wetlands International </p> {/* Replace with the actual time */}
                    </div>
                    <div className="col-3">
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>


        </div>
      </div>
    </div >
  )
}

export default Post