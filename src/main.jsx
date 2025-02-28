import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Form from './components/Forum';
import './styles/Fonts.css';
import App from './App';

// import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 <StrictMode>

     <App/>


 </StrictMode>
)
