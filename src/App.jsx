import React from 'react'
import Header from './Components/Header/Header'
import Practice from './Components/Practice'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/NavBar/Navbar'

import Token from './Components/Token'

const App = () => {
  return (
    <div>
      <div className='header'>
        <Header/>
      </div>
      <div className='Navbar'>
        <Navbar/>
      </div>
      <Hero weekday="Sunday"/>
      
      
      
      <Token/>
      <Practice/>

    </div>
    

  )
}

export default App
