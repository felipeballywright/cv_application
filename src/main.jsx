import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ExperienceRender } from './experience'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExperienceRender></ExperienceRender>
  </StrictMode>,
)
