import React,{useEffect} from 'react'
import Graph from '../components/Graph';
import {connect} from 'react-redux';
import { fetchHistory } from '../Redux/Expenses/ExpensesActions';

function Home({loading,fetchHistory,error}) {
  useEffect(()=>{
    fetchHistory();
},[])
  return (
     <>
       <h1 className = "ex_head mb-5  p-3">EXPENSE TRACKER</h1>
       <div className="expense_tracker">
       <div className = "container glassy">
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
      {loading ? <h2 style={{color:"white"}}>Loading...</h2> : error ? <h2 style={{color:"white"}}>{error}</h2> : <><div className= "chart">
        <Graph />
       </div>
       <div className= "form">
          
       </div>
       </>}
     </div>
     </div>
     </>
    
  )
}

const mapStateToProps = (state) =>{
  return {
     loading : state.loading,
     error:state.error,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
     fetchHistory : ()=>{dispatch(fetchHistory());},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);