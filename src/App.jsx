import { useState } from 'react'
import './App.css'

// 📝 Level 3: Forms & Input Handling
// Goal: Learn how to manage controlled inputs and form submission.
// ✅ Create a form that accepts name + email and displays them on submit.
// ✅ Add basic validation: show an alert if fields are empty.
// ✅ Add an "Edit" button that turns display values back into inputs.
// ✅ Keep submitted values in state so they persist when editing.

// READ AND MAKE SURE THAT YOU UNDERSTAND THE CORRECTION!


export function App() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function updateName(newValue) {
    setNameInput(newValue);
  }

  function updateEmail(newValue) {
    setEmailInput(newValue);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (nameInput === "" && emailInput === "") {
      alert("Both inputs are empty");
      return;
    } else if (nameInput === "") {
      alert("Name input is empty");
      return;
    } else if (emailInput === "") {
      alert("Email input is empty");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return <p>Hey there!</p>;
  }

  return (
    <div className="app-container">
      <h2>Form</h2>
      <form className="info-form" onSubmit={handleSubmit}>
        <label htmlFor="name-input" className="info-label">
          Name
        </label>
        <input
          onChange={(event) => updateName(event.target.value)}
          id="name-input"
          className="info-input"
          type="text"
        />
        <label htmlFor="email-input" className="info-label">
          Email
        </label>
        <input
          onChange={(event) => updateEmail(event.target.value)}
          id="email-input"
          className="info-input"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// FINISHED EXERCISES:

// 🧱 Level 1: Components & JSX ✅
// 🧠 Level 2: State Practice ✅

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

export function CarlitosProfile(){
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

export function Counter(){
  const [counter, setCounter] = useState(0);

  function increaseCount(){
    setCounter(prev => prev + 1);
  }

   function decreaseCount(){
    setCounter(prev => prev - 1);
  }

  return( 
    <div className='app-container'>
      <h2>{counter}</h2>
      <div className='button-container'>
        <button className='counter-button' onClick={decreaseCount}>Decrease</button>
        <button className='counter-button' onClick={increaseCount}>Increase</button>
       </div>
    </div>
  )
}

