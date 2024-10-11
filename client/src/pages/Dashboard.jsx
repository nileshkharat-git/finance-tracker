import React, {useState} from 'react'
import { BiLineChart,BiLineChartDown } from "react-icons/bi";
import { BsFillPieChartFill, BsListColumns } from "react-icons/bs";
import { Income, Transactions, Expense } from '../components'

// hooks
const handleLogout = () => {
  sessionStorage.clear()
}
const Dashboard = () => {
  const [showComponent, setShowComponent] = useState('')
  return (
    <div className='h-[93vh] flex'>
        <section className='w-1/6 border-r-2 border-gray-100 h-full'>
            <ul className='text-2xl'>
                <li className='px-3 py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer mb-1' onClick={() => setShowComponent('Transactions')}><BsListColumns className='inline text-3xl'/>  Transactions</li>
                <li className='px-3 py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer mb-1' onClick={() => setShowComponent('Income')}><BiLineChart className='inline text-3xl'/> Income</li>
                <li className='px-3 py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer mb-1' onClick={()=>setShowComponent('Expense')}><BiLineChartDown className='inline text-3xl'/> Expense</li>
                <li className='px-3 py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer mb-1'><BsFillPieChartFill className='inline text-3xl'/> Statistics</li>
                <li className='px-3 py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer mb-1'><BsFillPieChartFill className='inline text-3xl'/> Goal</li>
                <li className='px-3 py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer mb-1' onClick={handleLogout}>Logout</li>
            </ul>
        </section>
        <main className='w-5/6'>
            {(() => {
              switch (showComponent) {
                case 'Transactions':
                  return <Transactions/>
                
                case 'Income':
                  return <>
                          <Income/>
                         </>
                case 'Expense':
                  return <Expense/>
                default:
                  return <Transactions/>
              }
            })()}
        </main>
    </div>
  )
}

export default Dashboard