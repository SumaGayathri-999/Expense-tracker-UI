import { ADD_EXPENSE,DELETE_EXPENSE,FETCH_HISTORY_FAILURE,FETCH_HISTORY_SUCCESS,INPUT_ERROR } from "./ExpenseTypes";

const initialstate = {
    loading : true,
    expenses : [],
    error : "",
    inputerror:""
}

const expenseReducer = (state = initialstate,action) =>{
     switch(action.type){
        case FETCH_HISTORY_SUCCESS :
        return {
            loading : false,
            expenses : action.payload,
            error : ""
        }
        case FETCH_HISTORY_FAILURE :
            return {
                loading :  false,
                expenses:[],
                error : action.payload
            }
        case ADD_EXPENSE :
            let color;
            if(action.payload.type === "Investment"){
                color = "#0000ff";
            }
            else if(action.payload.type === "Entertainment"){
                color = "#ff1493";

            }
            else if(action.payload.type === "Household Expenses"){
                color = "#8b008bad";
            }
            else{
                color = "#ff0000";
            }
            return {
                ...state,
                expenses:[...state.expenses,{...action.payload,"color":color}],
                inputerror:""
            }
       case DELETE_EXPENSE :
        const expenses = [...state.expenses];
        const deleteditem_index = expenses.findIndex((item) => item._id === action.payload);
        expenses.splice(deleteditem_index,1);
        return {
            ...state,
            expenses
        }
        case INPUT_ERROR :
            return {
                ...state,
                inputerror:action.payload,
            }
        default :
        return state;
     }
}

export default expenseReducer;