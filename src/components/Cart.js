import React, { useState } from 'react'
import data from '../db.json'
import { AiOutlineDelete } from 'react-icons/ai'

function Cart({ setIsOpen, cart, setCart, id }) {
  const [items] = useState(data)
  // const [showButton, setShowButton] = useState(false)

  return (
    <>
      <aside className='bg-white p-5 fixed top-0 right-0 h-full z-50'>
        <div className='flex items-center justify-between mb-5 gap-10'>
          <h2 className='text-slate-800 font-bold text-2xl uppercase'>Your Cart</h2>
          <button className='border-b-2 border-transparent hover:border-slate-800 transition-all duration-150' onClick={() => setIsOpen(false)}>Close</button>
        </div>
        <div className='grid grid-cols gap-5'>
          {cart.map((itms) => {
            const { id, name, small } = itms
            const handleDelete = () => {
              const arr = cart.filter((item) => item.id !== id)
              setCart(arr)
            }
            return (<article key={id} className="flex items-center justify-between gap-10">
              <div className='flex items-center'>
                <img src={small} alt="" className='w-20 h-20 rounded-full mr-2' />
                <h2>{name}</h2>
              </div>
              <button className='bg-red-500 hover:bg-red-600 transition-all py-1 px-2 text-small text-white' onClick={handleDelete}><AiOutlineDelete /></button>
            </article>)
          })}

        </div>
        {cart.length> 0? <button className='bg-slate-700 py-2 px-10 mt-10 text-white hover:bg-slate-900 transition-all duration-150'>Clear Cart</button>: <p>Your cart is empty</p>}
      </aside>
    </>
  )
}

export default Cart