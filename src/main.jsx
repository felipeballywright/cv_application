import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.css'  
import { HandleLayout } from './handle_layout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HandleLayout/>
  </StrictMode>,
)
