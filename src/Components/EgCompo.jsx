import React, { useState } from 'react'

const EgCompo = () => {
  let randomNum = Math.floor(Math.random()*10)+1; 
  let getFruitName = (num) => {
    switch(num){
      case 1:
        return "Apple";

      case 2:
        return "Melon";
        
      case 3:
        return "Suica";
       
      case 5:
        return "Pompgranate";
           
      case 6:
        return "Pineapple"
      case 4:
        return "Grapes";
  
      case 7:
        return "Kiwi";
          
      case 8:
        return "Orange";
         
      case 9:
        return "Mango";
              
      default:
        return "Banana"
    }
  }
  const [fruits, setFruits] = useState([])
  const addFruits=()=>{setFruits([...fruits,{
    id:fruits.length,
    value:getFruitName(randomNum)
  }])
    
  }
        return (
            <div>
              <button onClick={addFruits}>ADD Fruits</button>
              <ul>
                {fruits.map((fruit)=> {
                 return <li key={fruit.id}>{fruit.value}</li>
                })}
              </ul>
              
            
            </div>
          )
    }
        


  


export default EgCompo
