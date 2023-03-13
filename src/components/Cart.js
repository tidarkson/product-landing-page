import React, {useState} from 'react'
import data from '../db.json'

function Cart({setIsOpen}) {
    const [items] = useState(data)
  return (
    <>
        <aside className='bg-white p-5 fixed top-0 right-0 h-full z-50'>
            <div className='flex items-center justify-between mb-5'>
            <h2 className='text-slate-800 font-bold text-2xl uppercase'>Your Cart</h2>
            <button className='border-b-2 border-transparent hover:border-slate-800 transition-all duration-150' onClick={() => setIsOpen(false)}>Close</button>
            </div>
           <div className='grid grid-cols gap-5'>
           {items.products.map(({id, name, small}) => 
                <article key={id} className="flex items-center justify-between">
                    <div className='flex items-center'>
                    <img src={small} alt="" className='w-20 h-20 rounded-full mr-2'/>
                    <h2>{name}</h2>
                    </div>
                    <button className='bg-red-500 hover:bg-red-600 transition-all py-1 px-2 text-small text-white'>Delete</button>
                </article>
            )}
           </div>
            <button className='bg-slate-700 py-2 px-10 mt-10 text-white hover:bg-slate-900 transition-all duration-150'>Clear Cart</button>
        </aside>
    </>
  )
}

export default Cart