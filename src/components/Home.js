import React from 'react'
import '../Global.css'

const Home = () => {
  return (
   <div className='box'>
    <div className='boxs'>
        <div className='box_txt'>
            <h1>Learn trending courses with <br/>
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
        <img src='images/Homepage.jpg' alt='home_page_image'/>
        </div>
    </div>
   </div>
  )
}

export default Home