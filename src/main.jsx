import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GeneralInfoForm } from './general_info'
import { EducationRender } from './education'
import { ExperienceRender } from './experience'
import './index.css'
import './main.css'  



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfoForm></GeneralInfoForm>
    <ExperienceRender></ExperienceRender>
    <EducationRender></EducationRender>
  </StrictMode>,
)
