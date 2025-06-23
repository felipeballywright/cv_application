import { useState } from 'react'
import './App.css'

// 🧱 Level 1: Components & JSX
// Goal: Understand how to break the UI into components and write clean JSX.
// ✅ Create a ProfileCard that displays your name, picture, and a short bio.
// ✅ Split ProfileCard into Header, Avatar, and Bio components.
// ✅ Create a ContactInfo component with hardcoded phone, email, and location.
// ✅ Combine everything in an App component that renders ProfileCard and ContactInfo.

// 🔜 Suggestions for Next Steps (No Code):
// Break it into smaller components
// Turn Header, Avatar, and Bio into their own files so the App stays clean and compositional.

// Use props instead of hardcoded data
// Let each component receive its content via props so you can reuse them for other people later.

// Add a style sheet
// Try giving each section some basic styling in a card.css or App.css file. Focus on layout, spacing, and font sizing.




export default function App(){
  return(
    <div className='card'>
      <div className='header'>
        <h2>Carlitos Bala</h2>
      </div>
      <div className='avatar'>
        <img src="src/images/Carlitos-bala.png" alt="" />
      </div>
      <div className='bio'>
        <p>
          Carlos Salim Balaá (Buenos Aires, 13 de agosto de 1925-Buenos Aires, 22 de septiembre de 2022),[1]​ conocido popularmente como Carlitos Balá, fue un humorista, actor, músico y presentador argentino. 
          Con más de sesenta años de trayectoria artística, en su mayoría dedicada al show infantil, realizó espectáculos en radio, televisión, cine, circo y teatro.
        </p>
      </div>
    </div>
  )
}