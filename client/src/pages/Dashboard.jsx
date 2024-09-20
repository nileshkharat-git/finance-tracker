import React from 'react'
import AddIncome from '../components/AddIncome'
import Transactions from '../components/Transactions'


const MainComponent = (Component=Transactions) => {  
  return <Component />
}
const Dashboard = () => {
  return (
    <div className='h-[93vh] flex'>
        <section className='w-1/6 border-r-2 border-gray-100 h-full'>
            <ul className='text-2xl'>
                <li className='px-3 py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer mb-1' onClick={()=>{}}>Transactions</li>
                <li className='px-3 py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer mb-1' onClick={()=>{}}>Income Sources</li>
                <li className='px-3 py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer mb-1'>Expences</li>
                <li className='px-3 py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer mb-1'>Statistics</li>
            </ul>
        </section>
        <main className='w-5/6'>
          <MainComponent />
        </main>
    </div>
  )
}

export default Dashboard