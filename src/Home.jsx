import React from 'react'

export default function Home() {

const handleClick = () => {
      console.log('hello,ninjas');

}

const handleClickAgain = (name) => {
  console.log('hello' + name);

}

  return (
    <div>
        <div className="flex justify-evenly">
        <h2 className='text-md font-semibold'>Homepage</h2>
        <button className='border border-red-600 bg-red-600 rounded-lg p-1 hover:text-black hover:bg-white' onClick={handleClick}>Click me </button>
        <button className='border border-red-600 bg-red-600 rounded-lg p-1 hover:text-black hover:bg-white' onClick={() => handleClickAgain('Aaron')}>Click Too </button>
       
        </div>
         
    </div>
  )
}
