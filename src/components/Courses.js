import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Global.css'
import SData from './SData'

const Courses = () => {
  return (
   <div className='courses'>
    {
        SData.map((curElem) => {
         return  <NavLink to={"https://www.google.com/search?q=courses&rlz=1C1RXQR_enIN1020IN1020&oq=courses+&aqs=chrome..69i57j0i512l4j69i60l3.3426j0j7&sourceid=chrome&ie=UTF-8"} target="_blank">
             <div className='courses_card'>
            <div className='card_img'>
                <img src={curElem.image} alt="images"/>
            </div>
            <div className='card_txt'>
                <h1>{curElem.title}</h1>
                <br/>
                <p>{curElem.description}</p>
                <br/>
                <p>₹ {curElem.price}</p>
            </div>
        </div>
         </NavLink>
        })
    }
   </div>
  )
}

export default Courses