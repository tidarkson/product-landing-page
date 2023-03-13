import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import data from '../db.json'

function FetchProducts() {
    const [items] = useState(data)
  return (
    <div>
        <section>
            <h1 className='text-white'>All Products</h1>
            {items.products.map((item) =>
                {
                    const {id,name,desc,small,large} = item
                return (
                    <div key={id}>
                        <picture>
                            <source media='(min-width:768px)' srcSet={large}/>
                            <img src={small} alt="" />
                        </picture>
                        <div>
                        <h3 className='font-bold text-4xl mb-5 text-white'>{name}</h3>
                        <p className='text-slate-300'>{desc}</p>
                        <ul className='flex iems-center justify-between'>
                            <li><Link to='/' className='border-2 border-white py-2 px-4 text-white'>More details</Link></li>
                            <li><button className='bg-white text-slate-800 py-2 px-4'>Add to cart</button></li>
                        </ul>
                        </div>
                    </div>
                )
                }
            )}
        </section>
        
    </div>
  )
}

export default FetchProducts