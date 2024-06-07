import React from 'react'
import './Hero.css'
import imgOne from "../../assets/park1.jpeg"
import imgTwo from "../../assets/park2.jpeg"
import imgThree from "../../assets/park3.jpeg"
const Hero = (props) => {
  return (
    <div className="background">
      <h1>Parking are made easy here</h1>
      <div className='HeroImg'> 
        <img id='img1' alt="" src={imgOne}/>
        <img id='img2' alt="" src={imgTwo}/>
        <img id='img3' alt="" src={imgThree}/>


      </div>
     

       
    </div>
  )
}

export default Hero
