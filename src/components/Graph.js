import React from 'react';
import Labels from './Labels';
import Form from './Form';
import { Chart, ArcElement } from 'chart.js'
import { Doughnut} from 'react-chartjs-2';
import History from './History';
import {connect} from 'react-redux';
import {getPercentage} from '../calculation';


function Graph({expense_data,inputerror}) {
const [percentage_array,total]= getPercentage(expense_data);
if(percentage_array[0]){
  Chart.register(ArcElement);
   var config = {
      data:{
          datasets: [{
            labels:[percentage_array[0] && percentage_array[0]["type"],percentage_array[1] && percentage_array[1]["type"],percentage_array[2] && percentage_array[2]["type"],percentage_array[3] && percentage_array[3]["type"]],

              data: [percentage_array[0] && percentage_array[0]["percentage"],percentage_array[1] && percentage_array[1]["percentage"],percentage_array[2] && percentage_array[2]["percentage"],percentage_array[3] && percentage_array[3]["percentage"]],
              backgroundColor: [
                `${ percentage_array[0] && percentage_array[0]["color"]}`,
                `${percentage_array[1] && percentage_array[1]["color"]}`,
                `${percentage_array[2] && percentage_array[2]["color"]}`,  
                `${percentage_array[3] && percentage_array[3]["color"]}`
              ],
              hoverOffset: 4,
              borderRadius : 30,
              spacing:8,
              borderColor:'white',
              borderWidth:3
  
            }],
            labels:[percentage_array[0] && percentage_array[0]["type"],percentage_array[1] && percentage_array[1]["type"],percentage_array[2] && percentage_array[2]["type"],percentage_array[3] && percentage_array[3]["type"]],
      },
      options : {
          cutout:"80%",
          responsive:true,
          maintainAspectRatio:true,
          elements:{
            point:{hitRadius:5}
          }
      }
      
    };
  
}
  return (
    <>
    <div className="conatiner content_cont p-4 bg-md-danger">
      <div className="row mb-md-5">
         {!(total === 0 ) ?
         <>
         <div className = " col-12 mb-5 mb-md-0 col-md-5" >
          <div className="chart">
            <h1 className="mini_head">Pie Chart</h1>
            {config ? <Doughnut className="doughnut" {...config} style={{minwidth:"400px",maxWidth:"500px"}}>
          </Doughnut> : ""}
           <p className="total">Total : <span style={{color:"white"}}>₹ {total}</span></p>
          </div>  
        </div>
          <div className="col-12 col-md-6 mb-5 mt-0 ml-md-5 mb-md-0 mt-md-5" >
                <Form />
                <p className="mt-1" style={{color:"red",fontSize:"1.2rem",fontWeight:600}}>{inputerror}</p>
           </div>
           </>
           :
           <div className="col-12 col-md-5 mb-5 mb-md-0" style={{margin:"auto"}}>
                <Form />
                <p className="mt-1" style={{color:"red",fontSize:"1.2rem"}}>{inputerror}</p>
           </div>
       
           
          } 

      </div>
        {!(total === 0) &&
          <>
          <div className="row ">
          <div className = "expense_labels col-12 col-md-5 mt-5 mb-5 mb-md-0 ">
           {config && <Labels percentage_array={percentage_array} />}
             
          </div>
          <div className = "expense_history  ml-md-5 col-12 col-md-6  ">
             <History />
          </div>
        </div>
        </>
      }

        
    </div>
    </>
   
  )
}
// const mapStateToProps = (state) => {
//   return {
//     expense_data:state.expenses,
//   }
// }
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       fetchHistory : ()=>{dispatch(fetchHistory())},
//    }
//   }

// export default connect(mapStateToProps,mapDispatchToProps)(Graph);
const mapStateToProps = (state) => {
  return{
    expense_data :state.expenses,
    inputerror :state.inputerror
  }
}

export default connect(mapStateToProps,null)(Graph);