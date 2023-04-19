import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import expenseReducer from './Expenses/ExpensesReducer';
  
const Store = createStore(expenseReducer,composeWithDevTools(applyMiddleware(thunk)));
  
export default Store ;