import React from 'react'

const Text = ({heading , para , img}) => {
  return (
    <div className=' flex flex-col h-[100vh] items-center py-20 w-full gap-10'>
      <h1 className=' text-6xl text-blue-800  font-scorch '>{heading}</h1>
      <p className=' font-medium text-purple-500 w-[40%] text-center'>{para}</p>
      <img className='w-[500px] object-cover rounded-lg shadow-md shadow-gray-500' src={img} alt="" />
    </div>
  )
}

export default Text