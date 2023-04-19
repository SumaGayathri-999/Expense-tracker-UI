import { ADD_EXPENSE,DELETE_EXPENSE,FETCH_HISTORY_FAILURE,FETCH_HISTORY_SUCCESS,INPUT_ERROR } from "./ExpenseTypes";
import axios from 'axios';
import {toast} from 'react-toastify';

export const addExpense = (item) =>{ 
    return{
        type : ADD_EXPENSE,
        payload:item
    }
}

export const delete_expense = (item) => {
    return{
        type : DELETE_EXPENSE,
        payload:item
    }
}

 export const fetchhistorySuccess = (items)=>{
    return{
        type : FETCH_HISTORY_SUCCESS,
        payload :items
    }
 }
 export const fetchhistoryFailure = (error)=>{
    return{
        type : FETCH_HISTORY_FAILURE,
        payload : error
    }
 }

export const inputError = (error) =>{
     return{
        type: INPUT_ERROR,
        payload:error
     }
}

export const fetchHistory = () => {
    return async (dispatch) => {
        axios.get("https://expensetracker-nhxo.onrender.com/api/get_labels")
        .then((res)=>{
            dispatch(fetchhistorySuccess(res.data));
        })
        .catch((err)=>{
             dispatch(fetchhistoryFailure(err.message))
        })
        
    }
}

export const addingExpense = (formdata,setIsreset)=>{
        return (dispatch) => {
            if(formdata.name === "" ) {
                dispatch(inputError("You must enter Expense name "))
             }
             else if(formdata.amount === ""){
                dispatch(inputError("You must enter Expense Amount "))
             }
            else{
                axios.post("https://expensetracker-nhxo.onrender.com/api/create_expense",formdata)
                .then((res)=>{
                   const addedData = res.data;
                   dispatch(addExpense(addedData));
                   setIsreset(true);
                })
                .catch((err)=>{
                  console.log(err);
                })
            }

    }
  
}
export const deletingexpense = (id) => {
    return (dispatch) => {
        const item_id = {"id" : String(id)};
        axios.delete("https://expensetracker-nhxo.onrender.com/api/delete_expense",{data : item_id})
        .then((res)=>{
            toast.info(res.data)
            dispatch(delete_expense(id));
        })
        .catch((err)=>{
        })
    }
}