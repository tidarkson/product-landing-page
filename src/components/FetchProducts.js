import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import data from '../db.json'
import Cart from './Cart'

function FetchProducts({isOpen, setIsOpen}) {
    const [items] = useState(data)
  return (
    <div>
        <section className='px-5 py-10 lg:py-20 xl:max-w-6xl xl:mx-auto grid grid-cols-1 gap-5 lg:gap-10 xl:gap-20'>
            <h1 className='text-white'>All Products</h1>
            {items.products.map((item) =>
                {
                    const {id,name,desc,small,large} = item
                return (
                    <article key={id} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:place-items-center md:my-5 lg:gap-10 xl:gap-20">
                        <picture>
                            <source media='(min-width:768px)' srcSet={large}/>
                            <img src={small} alt="" />
                        </picture>
                        <div>
                        <h3 className='font-bold text-4xl mb-5 text-white'>{name}</h3>
                        <p className='text-slate-300 mb-10 md:mb-3'>{`${desc.substring(0, 200)}...`}</p>
                        <ul className='flex items-center justify-between'>
                            <li><Link to={`/${name}`} className='border-2 border-white py-2 px-4 text-white '>More Details</Link></li>
                            <li><button className='bg-white text-slate-800 py-2 px-4 hover:bg-slate-800 hover:text-white' onClick={()=> setIsOpen(true)}>Add To Cart</button></li>
                        </ul>
                        </div>
                    </article>
                )
                }
            )}
        </section>
        {isOpen && <Cart setIsOpen={setIsOpen}/>}
    </div>
  )
}

export default FetchProducts