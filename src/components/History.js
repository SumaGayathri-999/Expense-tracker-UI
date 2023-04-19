import React from 'react';
// import {fetchHistory} from '../Redux/Expenses/ExpensesActions';
import { deletingexpense } from '../Redux/Expenses/ExpensesActions';
import {connect} from 'react-redux';


function History({expense_data,deletingexpense}) {
  const onDelete = (id) => {
      deletingexpense(id)
  }
 
  return (
    <>
  
     <h1 className="text-light mb-2 mini_head">History</h1>
     {
       expense_data.loading ? 
       <p>Loading ...</p>
      :
      <div className = "History " >
      {expense_data.map((item)=>{
         return  <EachHistory key={item._id} data={item} onDelete = {onDelete}/>
      })}
     </div>
     }
     
    </>
  )
}
 function EachHistory({data,onDelete}){
        const spentDate =  data.date;
        const time =(spentDate).split("T")[0].split("-");
        const indian_time = `${time[2]}/${time[1]}/${time[0]}`

     return(
        <>
          <div className="each_history d-flex flex-col p-2 mb-2 glassy" style={{width:"100%",textAlign:"left"}}>
            <div>
                <i className="fa-solid fa-trash-can mt-2"  onClick = {()=>onDelete(data._id)} style={{cursor:"pointer"}}></i>
            </div>
            <div className='ml-3 d-flex  p-2 history_text ' style={{display:"flex",width:"100%",flexWrap:"wrap",gap:"20px",justifyContent:"space-between",textTransform:"capitalize",fontWeight:600,letterSpacing:"0.1rem",wordWrap:"break-word"}} >
                <div style={{width:"100%",flexBasis:"0"}}>{`${data.name}-₹${data.amount}`}</div>
                <div>{indian_time}</div>
            </div>
            
          </div>
        </>
     )
 }
const mapStateToProps = (state) => {
  return{
    expense_data :state.expenses,
  }
}
const mapDispatchToProps = (dispatch) =>{
   return {
      deletingexpense : (id)=>{dispatch(deletingexpense(id))}
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(History);