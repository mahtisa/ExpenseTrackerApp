import "../App.css"

import { useState } from "react"

const ExpenseForm = ({addTransactions}) => {
    const [formValue,setFormValue] = useState({
        type: "expense",
        amount: 0,
        desc: ""
    });
    const onChangeHandler = (e)=>{
        setFormValue({...formValue,[e.target.name]:e.target.value})
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        addTransactions(formValue);
        setFormValue({
            type: "expense",
            amount: 0,
            desc: ""
        })
    }
    return ( 
        <form className="form" onSubmit={submitHandler}>
            <input className="input" type="text" name="desc" placeholder="Description" onChange={onChangeHandler} value={formValue.desc}/>
            <input className="input" type="number" name="amount" placeholder="Amount" onChange={onChangeHandler} value={formValue.amount}/>
            <div>
                <input className="inputRadio" type="radio" value="expense" name="type" checked={formValue.type === "expense"} onChange={onChangeHandler}/>
                <label>Expense</label>
                <input className="inputRadio" type="radio" value="income" name="type" checked={formValue.type === "income"} onChange={onChangeHandler}/>
                <label>Income</label>
            </div>
            <button className="btn" type="submit">Add Transaction</button>
        </form>
     );
}
 
export default ExpenseForm;