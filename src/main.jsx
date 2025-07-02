import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GeneralInfoForm } from './generall_info'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfoForm></GeneralInfoForm>
  </StrictMode>,
)
