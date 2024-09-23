import React, { useEffect, useState } from 'react'
import { BsPencilSquare } from "react-icons/bs";
import axios from 'axios';
import useToken from '../hooks/useToken';

const TransactionCard = ({transaction})=>{
    return(
        <div className={`bg-white h-1/2 w-1/5 shadow-md mx-2 my-4 py-4 px-2 border-t-4 hover:shadow-xl ${transaction.transaction_type === "income" ? "border-green-500" : "border-red-500"}`}>
            <h1 className='text-2xl w-full font-semibold'>&#8377; {transaction.amount}</h1>
            <h2 className='text-xl text-right'>{transaction.category}</h2>
            <button className='text-[#7C00FE] text-3xl font-semibold p-1'><BsPencilSquare /></button>
        </div>
    )
}
const Transactions = () => {
    const {token} = useToken()
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/transactions',
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
          
          axios.request(options).then(function (response) {
            setTransactions(response.data)
          }).catch(function (error) {
            console.error(error);
          });
    }, [token])
    const [transactions, setTransactions] = useState([])
    
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