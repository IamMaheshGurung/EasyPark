import React, {useState} from 'react'
import './bookingform.css'
const BookingForm = () => {
  let [detail, setDetail] = useState({Name:"",Type:"", Mob:""});
  let [isSubmitted, setIsSubmitted]=useState(false)
  const hDefault = (event)=>{
    event.preventDefault();
    setIsSubmitted(true)
    setTimeout(()=>setIsSubmitted(false), 3000);
  }
  return (
    <div className='BookingForm'>
      {isSubmitted ? (
        <h2></h2>
      ) : (
        <>
          <h2>Kindly fill small detail</h2>
          <form className='detailForm' onSubmit={hDefault}>
              <label htmlFor="name" className='name'  required>Name:</label>
              <input type="text" name="name" placeholder={detail.Name} value={detail.Name} onChange={e=>setDetail({...detail, Name:e.target.value})}/>
              <label htmlFor="vehicle" className='Vehicle' >Type of Vehicle</label>
              <input type="text" name="vehicle" placeholder={detail.Type} value={detail.Type} onChange={e=>setDetail({...detail, Type:e.target.value})}/>
              <label htmlFor="mobile" className='mobile'>Mobile Number</label>
              <input type="phone" name="mobile" placeholder={detail.Mob} value={detail.Mob} onChange={e=>setDetail({...detail, Mob:e.target.value})}/>
              <button type='submit' id="button">Submit</button>
          </form>
        </>
      )}
    </div>
  )
}

export default BookingForm
