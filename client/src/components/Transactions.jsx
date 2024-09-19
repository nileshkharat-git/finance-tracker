import React, { useState } from 'react'
import { BsPencilSquare } from "react-icons/bs";

const TransactionCard = ({transaction})=>{
    return(
        <div className='bg-white h-1/2 w-1/5 shadow-lg m-2 py-4 px-2 hover:shadow-2xl'>
            <div className={`w-full ${transaction.type === "Income" ? "bg-green-500" : "bg-red-500"} h-3`}></div>
            <h1 className='text-2xl w-full font-semibold'>&#8377; {transaction.amount}</h1>
            <h2 className='text-xl text-right'>{transaction.category}</h2>
            <button className='text-[#7C00FE] text-3xl font-semibold p-1'><BsPencilSquare /></button>
        </div>
    )
}
const Transactions = () => {
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            date: "2022-01-01",
            type: "Income",
            amount: 100000,
            category: "Salary"
        },
        {
            id: 2,
            date: "2022-01-02",
            type: "Expense",
            amount: 50000,
            category: "Groceries"
        },
        {
            id: 3,
            date: "2022-01-03",
            type: "Income",
            amount: 200000,
            category: "Savings"
        }
    ])
    
  return (
    <div className='ml-3'>
        <h1 className='text-3xl'>Transactions</h1>
        {transactions.map((transaction)=>{
            return <TransactionCard key={transaction.id} transaction={transaction}/>
        })}
    </div>
  )
}

export default Transactions