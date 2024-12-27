import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from '../../assets/heart.png'
import Calories from "../../assets/calories.png"
import NumberCounter from "number-counter"
import {motion} from 'framer-motion'
const Hero = () => {

  const transition = {type: 'spring', duration : 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className='hero' id='hero'>

      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*the-best-ad */}
        <div className="the-best-ad">
          <motion.div 
          initial={{left:mobile? "168px": '238px'}} 
          whileInView={{left:'8px'}}
          transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>A melhor academia da cidade</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>
              Ideal body
            </span>
          </div>

          <div >
            <span>
              IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix="+"/>
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>menbers joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness progreans</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">
            Get Started
          </button>
          <button className="btn">
            Learn More
          </button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div 
        initial={{right:"-1rem"}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span> <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className='hero-image' />
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition} 
        src={hero_image_back} alt="" className='hero_image_back' />

        {/* calories */}
        <motion.div 
         initial={{right:"37rem"}}
         whileInView={{right: '28rem'}}
         transition={transition}
         className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>CaloriasQueimadas</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
