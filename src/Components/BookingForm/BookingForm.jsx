import React from 'react'
import './bookingform.css'
const BookingForm = () => {
  return (
    <div className='BookingForm'>
      <h2>Kindly fill small detail</h2>
        <div className='detailForm'>
            <label for="name" className='name' required>Name:</label>
            <input type="text" name="name" placeholder='enter your name'/>
            <label for="vehicle" className='Vehicle' >Type of Vehicle</label>
            <input type="email" name="email" placeholder='your email' required/>
            <label for="mobile" className='mobile'>Mobile Number</label>
            <input type="phone" name="mobile" placeholder='mobile number' required/>
            
        
        </div>
        <button className='submit' type='submit'>Submit</button>

    </div>
  )
}

export default BookingForm
