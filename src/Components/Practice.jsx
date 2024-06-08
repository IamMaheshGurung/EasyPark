import React, {useEffect, useRef, useState} from 'react'

const Practice = () => {

    const choice = useRef()
    
    const [count, setCount] = useState(0);
    const bClicked = () => {
      setCount(parseInt(choice.current.value));
      document.body.style.background = "blue";
    };
    const value = useRef(0);

    useEffect(()=>{
      value.current = value.current+1;
    });

   
  return (
    
    <div>
        <input type="number" ref={choice}/>
        <button onClick={bClicked}>Starting Number</button>
        <button onClick={()=> setCount(count=> count+1)}>Plus</button>
        <h1> I have rendered {count} times</h1>
        <button onClick={()=> setCount(count=> count-1)}>Minus</button>
        <h1> {value.current}</h1>
      
    </div>
  )
}

export default Practice;
