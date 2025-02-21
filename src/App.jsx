import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Error from './pages/Error';
import { Route, Routes } from 'react-router-dom';


const App = ({}) => {
  return (
    <>
     <Navbar/>  
     <Routes>
     <Route path='/' element= {<Home/>}></Route>
      <Route path='/home' element= {<Home/>}></Route>
      <Route path='/about' element= {<About/>}></Route>
      <Route path='/contact' element= {<Contact/>}></Route>
      <Route path='*' element= {<Error/>}></Route>
     </Routes>
     <Footer/>
  
    </>
  )
}

export default App;