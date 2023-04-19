import React, { useState, useEffect } from 'react'
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import { addingExpense } from '../Redux/Expenses/ExpensesActions';

function Form(props,) {
    const {register,handleSubmit,reset} = useForm();
    const [isreset,setIsreset] = useState(false);
    const onSubmit = (data)=>{
        props.addingExpense(data,setIsreset);
    }
    useEffect(()=>{
      if(isreset){
        reset();
        setIsreset(false);
      }
    },[isreset,reset])
  return (
    <>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mini_head">Transaction</h1>
        <input type = "text" {...register('name')}></input><br/>
        <select className="form-input" {...register('exp_type')}>
            <option value="Investment" default>Investment</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Household Expenses">Household Expenses</option>
        </select><br/>
        <input type="text" {...register('amount')}></input>
        <button type="submit" className=" w-100">Spend</button>
    </form>
    </>
  )
}

const mapDispatchToProps = {
  addingExpense
}

export default connect(null,mapDispatchToProps)(Form);