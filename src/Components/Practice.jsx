import React, {useEffect, useState} from 'react'

const Practice = () => {
    const [count, setCount] = useState(0)
    useEffect(callbackfunction,[])

  return (
    
    <div>
        <h1> I have rendered {count} times</h1>
      
    </div>
  )
}

export default Practice;
