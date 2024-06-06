import React, { useState, useEffect } from 'react';
const Token= () => {
    const [costumer, setCostumer] = useState({costumerName:"Mahesh Gurung", costumerAge:28, SlotNo:3})
    
    useEffect(() => {
      console.log(`${costumer.SlotNo}`)
    
      return () => {
        console.log("done")
      }
    }, [costumer.SlotNo]);
  
    const firstName = costumer.costumerName.split(' ')[0];
  
    return (
      <div>
        <h1>Hello {firstName}</h1>
        <p> you are on {costumer.SlotNo}</p>
        <h2>Have a nice day {firstName}</h2>
      </div>
    )
  }