import React from 'react'
import '../Global.css'

const About = () => {
  return (
    <div className='box'>
    <div className='boxs'>
        <div className='box_txt'>
            <h1>Welcome to About page of <br/>
                <span>Coursify</span>
            </h1>
            <br/>
            <p>We have a team of  experienced Mentors and we provide <br/>
             placement opportunities after completion of courses </p>
            <br/>
            <button className='get_started btn'>
                Get Started
            </button>
        </div>
    </div>
    <div className='box_2'>
        <div className='box_img'>
        <img src='images/About_us.jpg' alt='about_us_image'/>
        </div>
    </div>
   </div>
  )
}

export default About