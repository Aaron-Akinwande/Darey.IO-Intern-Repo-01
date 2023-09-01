import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className=" p-5 flex justify-between items-center max-w-xl m-auto border border-b-white ">
            <h1 className=' text-red-600 font-semibold text-xl'>The React Blog</h1>
            <div className="">
                <a className='ml-4 p-2  hover:text-red-600' href="/">Home</a>
                <a className='ml-4 p-2   hover:text-red-600' href="create">New Blog</a>
            </div>
        </nav>
    </div>
  )
}
