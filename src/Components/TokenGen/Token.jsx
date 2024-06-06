import React, {useState} from 'react'


const Token= () => {
 const [customer, setCustomer] = useState({customerName:"Mahesh Gurung", customerAge:28, SlotNo:3})
  
    useEffect(() => {
      console.log(`${customer.SlotNo}`)
    
      return () => {
        console.log("done")
      }
    }, [customer.SlotNo]);
    return (
    <div>
        <h1>Hello {customer.customerName}</h1>
        <p> you are on {customer.SlotNo}</p>
        <h2>Have a nice day {customer.customerName.split(" ")[0]}</h2>
      
    </div>
  )
}

export default Token

