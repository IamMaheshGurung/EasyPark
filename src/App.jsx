import React from 'react'
import Header from './Components/Header/Header'
import BookingForm from './Components/BookingForm/BookingForm'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/NavBar/Navbar'
const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div>
        <BookingForm/>
        <Hero weekday="Sunday"/>
      </div>
      
    </div>
  )
}

export default App
