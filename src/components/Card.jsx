import React from 'react'

function Card({n,name}) {
  return (
    <div className=' p-5'>
        
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div class="flex flex-col justify-between p-4 leading-normal">
    <img src='.\src\assets\m4ax.ae.jpg' alt="" className=' class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"' />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-3">{n}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {name}</p>
    </div>
</a>

    </div>
  )
}

export default Card