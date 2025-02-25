import Btn from './components/Btn';
import { useState } from 'react';
import Text from './components/Text';


const App = ({}) => {
  const [a, setA] = useState(true)
  const [b, setB] = useState(false)
  const [c, setC] = useState(false)
  const [d, setD] = useState(false)
  function changeA()
  {
    setA(true)
    setB(false)
    setC(false)
    setD(false)
  }
  function changeB()
  {
    setA(false)
    setB(true)
    setC(false)
    setD(false)
  }
  function changeC()
  {
    setA(false)
    setB(false)
    setC(true)
    setD(false)
  }
  function changeD()
  {
    setA(false)
    setB(false)
    setC(false)
    setD(true)
  }
  return (
    <div>
     <Btn onClick={changeA} className={a ?  "bg-black" : "bg-blue-400"} text= "A"/>
     <Btn onClick={changeB} className={b ?  "bg-black" : "bg-blue-400"} text= "B"/>
     <Btn onClick={changeC} className={c ?  "bg-black" : "bg-blue-400"} text= "C"/>
     <Btn onClick={changeD} className={d ?  "bg-black" : "bg-blue-400"} text= "D"/>
     {a ? <Text name = "I am A"  /> : null}
   
     {b ? <Text name = "I am B"  /> : null}
    
     {c ? <Text name = "I am C"  /> : null}
     
     {d ? <Text name = "I am D"  /> : null}

    </div>
  )
}

export default App;


{/* <Navbar/>  
     <Routes>
     <Route path='/' element= {<Home/>}></Route>
      <Route path='/home' element= {<Home/>}></Route>
      <Route path='/about' element= {<About/>}></Route>
      <Route path='/contact' element= {<Contact/>}></Route>
      <Route path='*' element= {<Error/>}></Route>
     </Routes>
     <Footer/> */}