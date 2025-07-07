import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { EducationRender } from './education'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EducationRender></EducationRender>
  </StrictMode>,
)
