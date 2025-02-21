import React from 'react'
import Card from './card'

function Hero() {
  return (
    <main>
        <div className='w-[100%] h-[87.3vh] bg-red-300 flex  items-center justify-center gap-4'>
       <Card n = "This is heading1" name= "this is paragraph 1 "/>
       <Card n = "This is heading2" name= "this is paragraph 2"/>
       <Card n = "This is heading3" name= "this is paragraph 3"/>
    </div>
    </main>
  )
}

export default Hero