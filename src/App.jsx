import React from 'react'
import Header from './Components/Header/Header'

import Hero from './Components/Hero/Hero'
import Navbar from './Components/NavBar/Navbar'
import EgCompo from './Components/EgCompo'
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
      
      

    </div>
  )
}

export default App
