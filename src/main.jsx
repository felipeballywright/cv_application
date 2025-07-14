import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GeneralInfoForm } from './general_info'
import { EducationRender } from './education'
import { ExperienceRender } from './experience'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfoForm></GeneralInfoForm>
  </StrictMode>,
)
