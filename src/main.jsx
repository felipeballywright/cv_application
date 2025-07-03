import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HandleEducation } from './education'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HandleEducation></HandleEducation>
  </StrictMode>,
)
