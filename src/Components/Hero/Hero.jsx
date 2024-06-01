import React from 'react'
import './Hero.css'
const Hero = (props) => {
  return (
    <div className="PerTimePrice">
        <h1>Prices</h1>
        <div className='Price'></div>
        <h2>200 yen per 30 Mins</h2>
        <h2>500 yen for 2 hours</h2>
        <h2>1400 yen for 24 hours and {props.weekday}</h2>
    </div>
  )
}

export default Hero
