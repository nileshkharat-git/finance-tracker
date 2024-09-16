import React from 'react'

const Dashboard = () => {
  return (
    <div className='h-[93vh]'>
        <section className='w-1/6 border-r-2 border-gray-100 h-full'>
            <ul className='text-2xl'>
                <li className='text-center py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer'>Income Sources</li>
                <li className='text-center py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer'>Expences</li>
                <li className='text-center py-4 bg-gray-100 hover:bg-gray-200 cursor-pointer'>Statistics</li>
            </ul>
        </section>
    </div>
  )
}

export default Dashboard