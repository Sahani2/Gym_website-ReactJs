import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
  return (
   <div className="hero">
<div className="left-h">
    <Header/>
{/* the add */}
    <div className="the-best-ad">
<div></div>
<span>The best fitness club ever</span>

    </div>

{/* heading */}
    <div className="hero-text">

        <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
        </div>
        <div>
            <span>Ideal Body</span>
        </div>
        <div >
            <span>  In here we will help you to shape and build your ideal body</span>
          
        </div>
    </div>

{/* figure */}

<div className="figures">
    <div>
        <span>+140 </span>
        <span>Expert coaches</span>
    </div>
    <div>
        <span>+978 </span>
        <span>members joined</span>
    </div>
    <div>
        <span>+ 50 </span>
        <span>fitness PROGRAMS</span>
    </div>
</div>
{/* buttons */}
<div className="hero-buttons">
    <buttons className="btn">Get Started</buttons>
    <buttons className="btn">Learn More</buttons>
</div>
</div>
   <div className="right-h">
    <button className='btn'>Join Now</button>

    <div className="heart-rate">
        <img src={Heart} alt="" />
        <span>Heart Rate</span>
        <span>116 bpm</span>
    </div>
   </div>
   </div>
   
  )
}

export default Hero