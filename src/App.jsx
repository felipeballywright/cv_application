import { useState } from 'react'
import './App.css'

// 🧱 Level 1: Components & JSX ✅

// 🧠 Level 2: State Practice
// Goal: Get comfortable using useState and updating values.
// ✅ Create a Counter with increment/decrement buttons.
// ✅ Make a Toggle button that shows/hides a paragraph.
// ✅ Build a "like button" that toggles between liked/unliked state.
// ✅ Add a button that changes the background color each time it’s clicked.


function ProfileCard({name, avatar, bio}){
  return(
    <div className='card'>
      <h2 className='header'>{name}</h2>
      <img className='avatar' src={avatar} alt="" />
      <p className='basic-text'>
        {bio}
      </p>
    </div>
  )
}

function ContactInfo({phone, email, location}){
  return(
    <div className='card'>
      <p className='bold-text'>Phone:</p>
      <p className='basic-text'>{phone}</p>
      <p className='bold-text'>Email:</p>
      <p className='basic-text'>{email}</p>
      <p className='bold-text'>Location:</p>
      <p className='basic-text'>{location}</p>
    </div>
  )
}

export function App(){
  console.log("Running App!");
  const name = "Carlitos Balá";
  const imgSource = "src/images/Carlitos-bala.png";
  const bio = "Carlos Salim Balaá (Buenos Aires, 13 de agosto de 1925-Buenos Aires, 22 de septiembre de 2022),​ conocido popularmente como Carlitos Balá, fue un humorista, actor, músico y presentador argentino.";
  const phone = "11 1234 1234";
  const email = "carlitosbala@gmail.com";
  const location = "Buenos Aires, Argentina";

  return (
    <div id='main-container'>
      <ProfileCard name={name} avatar={imgSource} bio={bio}></ProfileCard>
      <ContactInfo phone={phone} email={email} location={location}></ContactInfo>
    </div>
  )
}

