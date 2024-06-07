import React, {useState, useEffect}from 'react';
import BookingForm from './BookingForm/BookingForm';
import './token.css'

const Token = () => {
    const [click, getClick]=useState(false);
    const myDisplay =()=> getClick(true);
  return (
    click
    ?
    <div className="tokenGen">
        <h1>Thanks for choosing Easy Park</h1>
        <div><BookingForm/></div>
    </div>
    :(
    <div className='tokenGenOne'>
      <h1>Click here to get token</h1>
      <button onClick={myDisplay} className='TokenButton'>Token Generator</button>
    </div>)
  )
}

export default Token
