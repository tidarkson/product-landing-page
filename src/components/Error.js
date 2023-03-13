import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        <section className='flex flex-col items-center justify-center text-center h-screen'>
            <h1 className='mb-10 text-xl font-bold text-white'>Error 404 <span className='text-base text-slate-200 font-light'> |  The page you are looking for does not exist</span></h1>
            <Link to='/' className='bg-white text-slate-900 py-2 px-10 hover:bg-gray-300 transition-all duration-150'>&larr; Back to homepage</Link>
        </section>
    </div>
  )
}

export default Error