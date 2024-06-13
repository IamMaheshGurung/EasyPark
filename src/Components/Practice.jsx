import React, { useReducer } from 'react'
const initialState = {Qty:10};
const reducer = (state, action) => {
  if(action.type==="add"){
    return ({Qty : state.Qty + 1});
  }
  else if(action.type === "minus"){
    if(state.Qty===0){
      return ({Qty : "No"});
    }
    return ({Qty : state.Qty - 1});
  }
  else{
    return state;
  }
}

const Practice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1> I have {state.Qty} apple Now</h1>
      <button onClick ={()=>{
        (dispatch({type:"add"}));
      }}>Add Apples</button>
      <button onClick={()=>{
        (dispatch({type:"minus"}));
      }}>Give Apple</button>
      
    </div>
  )
}

export default Practice
