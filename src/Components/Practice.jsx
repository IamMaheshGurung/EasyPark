import React, { useState, useEffect, useRef} from 'react'

const Practice = () => {
  const myRef = useRef("");
  console.log(myRef);
  const [name,setName] = useState("Mahesh Gurung")
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
    myRef.current.style.color="Blue"
  }
  
  const reset = () =>{
    setName("Mahesh Gurung")
    myRef.current.focus()
  }
  return (
    <div>
      <h1  ref={myRef} >{count} Slots remaining in this Parking</h1>
      <h1>{message}</h1>
      <input ref={myRef} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={decreaseCount}>Book</button>
      <button onClick={increaseSlot}>Exit</button>
      <button onClick={reset}>RESET</button>
      
    </div>
  )
}

export default Practice
