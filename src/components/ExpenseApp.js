import "../App.css"

import {useEffect, useState} from 'react'

import ExpenseReview from "./ExpenseReview";
import Search from "./Search";
import Transactions from "./Transactions";

const ExpenseApp = () => {
    const [income,setIncome] = useState(0);
    const [expense,setExpense] = useState(0);
    const [transactions,setTransactions] = useState([]);
    const [filter,setFilter] = useState([]);
    const [searchItem,setSearchItem] = useState("");
    const addTransactions = (formValue)=>{
        setTransactions([...transactions,{...formValue, id:Date.now()}])
    }
    useEffect(()=>{
        let exp = 0;
        let inc = 0;
        transactions.forEach((f)=>{
            f.type === "expense" ? exp += parseInt(f.amount) : inc = inc + parseInt(f.amount);
        })
        setExpense(exp);
        setIncome(inc);
        setFilter(transactions)

    },[transactions])

    const search = (item)=>{
        if (item === ""){
            setFilter(transactions);
        }else{
            const filteredTransactions = filter.filter((t)=>t.desc.toLowerCase().includes(item.toLowerCase()));
            console.log(filteredTransactions)
            setFilter(filteredTransactions);
        }
    }
    return ( 
        <div className="container">
            <ExpenseReview income={income} expense={expense} addTransactions={addTransactions}/>
            <Search search={search} searchItem={searchItem} setSearchItem={setSearchItem}/>
            <Transactions filter={filter}/>
        </div>
     );
}
 
export default ExpenseApp;