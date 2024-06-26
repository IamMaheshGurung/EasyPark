import React, { useState, useEffect} from 'react'

const Practice = () => {
  const [count, setCount] = useState(10);
  const [message, setMessage] = useState("Parking is empty");
  

  useEffect ( ()=> {
    setMessage(count === 0 ? "Parking is Booked" : "Parking is Empty");
    
    console.log("Component rendered")
  },[count])
  
  const decreaseCount =()=>{
    setCount((count) => {
      if(count<=0){
        return 0;}
      else{
        return count-1;
  }
  });
  };

  const increaseSlot = () =>{
    setCount((count)=>{
      if(count<10){
        
        return count+1;
      }
      else{
        return count;
      }
    })
  }
  return (
    <div>
      <h1>{count} Slots remaining in this Parking</h1>
      <h1>{message}</h1>
      <button onClick={decreaseCount}>Book</button>
      <button onClick={increaseSlot}>Exit</button>
      
    </div>
  )
}

export default Practice
