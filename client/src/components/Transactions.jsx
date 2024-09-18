import React, { useState } from 'react'

const Transactions = () => {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        
    }, [])
  return (
    <div>
        <table className='table-auto'>
            <thead>
                <tr>
                    <th className='px-3 py-4'>Date</th>
                    <th className='px-3 py-4'>Type</th>
                    <th className='px-3 py-4'>Amount</th>
                    <th className='px-3 py-4'>Category</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Transactions