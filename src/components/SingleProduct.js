import React, {useState, useEffect} from 'react'
import data from '../db.json'
import {Link, useParams} from 'react-router-dom'
import Cart from './Cart'

function SingleProduct({isOpen, setIsOpen, handleClick}) {
    const [singleProduct, setSingleProduct] = useState([])
    const {name} = useParams()
    const {item} = useParams()


    useEffect(()=> {
        const findProduct =()=>{
            const newProduct = data.products.find((product)=>product.name === name)
            setSingleProduct(newProduct)
        }
        findProduct()
    }, [name])
  return (
    <>
    <section className='xl:max-w-6xl xl:mx-auto py-10 lg:py-20 p-5'>
        <img src={singleProduct.large} alt="" />
        <h1 className='text-4xl my-5 lg:mb-10 text-white font-bold md:5-xl lg:6-xl'>{name}</h1>
        <p className='text-slate-300'>{singleProduct.desc}</p>

        <ul className='flex items-center mt-10'>
            <li><Link to="/" className='text-slate-200 hover:text-white'>&larr; Back</Link></li>
            <li className='ml-5'><button className='bg-white text-slate-800 py-2 px-4 hover:bg-slate-800 hover:text-white' onClick={() => handleClick(item)}>Add To Cart</button></li>
        </ul>
    </section>
    {isOpen  && <Cart setIsOpen={setIsOpen}/>}
    </>
  )
}

export default SingleProduct