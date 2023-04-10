import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const ExpenseReview = ({income,expense,addTransactions}) => {
    const [isShow,setIsShow] = useState(true)
        return ( 
        <div>
            <div className="topSections">
                <h2>Balance: {income - expense}</h2>
                <button className="btn" onClick={()=>setIsShow(!isShow)}>{isShow?"Cancel":"Add"}</button>
            </div>
            <div>
                 {isShow && <ExpenseForm addTransactions={addTransactions}/>}
             </div>
            <div className="resultSection">
                <div className={`${expense > income ? "expense" : "equal" } item`}>Expense: {expense}</div>
                <div className={`${expense < income ? "income" : "equal" } item`}>Income: {income}</div>
            </div>
        </div>
     );
}
 
export default ExpenseReview;