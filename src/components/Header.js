import React from 'react'
import {CiShoppingCart} from 'react-icons/ci'
import { Link } from 'react-router-dom'

function Header({setIsOpen}) {
    return (
        <>
            <header className='flex items-center justify-between sticky top-0 z-30 w-full border border-1 border-slate-700 text-slate-700 bg-slate-100 text-2xl px-10'>
                <h1 className='font-bold'><Link to='/'>FXSHION!</Link></h1>
                <button className='flex items-center' onClick={()=>setIsOpen(true)}><CiShoppingCart className='text-4xl'/></button>
            </header>
        </>
    )
}

export default Header