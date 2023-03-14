import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../db.json'
import Cart from './Cart'

function FetchProducts({ isOpen, setIsOpen }) {
    const [items] = useState(data)
    const [cart, setCart] = useState([])

    return (
        <div>
            <section className='px-5 py-10 lg:py-20 xl:max-w-6xl xl:mx-auto grid grid-cols-1 gap-5 lg:gap-10 xl:gap-20'>
                <h1 className='font-bold text-3xl mb-5 text-white'>All Products</h1>
                {items.products.map((item) => {
                    const { id, name, desc, small, large } = item
                    const handleClick =() => {
                        setCart([...cart,item])
                        console.log(cart)
                    }

                    return (
                        <article key={id} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:place-items-center md:my-5 lg:gap-10 xl:gap-20 border border-slate-800 rounded hover:bg-slate-800">
                            <picture>
                                <source media='(min-width:768px)' srcSet={large} />
                                <img src={small} alt="" />
                            </picture>
                            <div className='px-5 py-5'>
                                <h3 className='font-bold text-3xl mb-5 text-white'>{name}</h3>
                                <p className='text-slate-300 mb-10 md:mb-3'>{`${desc.substring(0, 200)}...`}</p>
                                <ul className='flex items-center justify-between'>
                                    <li><Link to={`/${name}`} className='border-2 border-slate-700 py-2 px-4 text-white hover:bg-slate-800'>More Details</Link></li>
                                    <li><button className='bg-white text-slate-800 py-2 px-4 hover:bg-slate-800 hover:text-white' onClick={() => handleClick(item)}>Add To Cart</button></li>
                                </ul>
                            </div>
                        </article>
                    )
                }
                )}
            </section>
            {isOpen && <Cart setIsOpen={setIsOpen} cart={cart} setCart={setCart}/>}
        </div>
    )
}

export default FetchProducts