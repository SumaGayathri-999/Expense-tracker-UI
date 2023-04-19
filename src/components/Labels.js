import React from 'react'
// import {connect} from 'react-redux';

function Labels({percentage_array}) {
  return (
    <>
      {percentage_array.map((item,index)=>{
        return (
            <EachLabel key={index} expense = {item}/>
        )
      })}
    </>
  )
}
function EachLabel({expense}){
    if(!expense) return <></>
    return(
        <>
         <div className="d-flex justify-between labels mb-3">
             <div className="d-flex">
              <div className= "rounded mr-3 mr-md-5" style={{width:"8px",height:"30px",backgroundColor:expense.color,border:"2px solid white"}}></div>
              <div style={{fontWeight:600,textAlign:"left"}}>{expense.type}</div>
            </div>
            <div>{expense.percentage}%</div>
         </div>
        </>
    )
}

export default Labels;