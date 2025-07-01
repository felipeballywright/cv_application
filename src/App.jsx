import { useState } from 'react'
import './App.css'

// 🧩 Level 5: Section Management
// Goal: Practice combining forms, state and components.
// Build a GeneralInfoForm with name/email/phone inputs and a submit button.
// On submit, show the info in a readable format and hide the form.
// Add an “Edit” button to bring the form back with pre-filled values.

function RenderSubmittedForm({name, email, phone}){
  console.log("Running RenderSubmittedForm");

  return(
    <div>
      <h1>HELLO</h1>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  )
} 

export function GeneralInfoForm(){
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateName(newValue){
    setNameInput(newValue);
  }

  function updateEmail(newValue){
    setEmailInput(newValue);
  }

  function updatePhone(newValue){
    setPhoneInput(newValue);
  }

  function handleSubmit(event){
    console.log("Running handleSubmit");
    event.preventDefault();
    setIsSubmitted(true);
  }

  function handleEdit(){
    setIsSubmitted(false);
  }
  
  if(isSubmitted){
    console.log("isSubmitted is true");
    console.log("These are the values:", nameInput, emailInput, phoneInput);
    return(
      <>
        <RenderSubmittedForm 
          name={nameInput} 
          email={emailInput} 
          phone={phoneInput}
        />
        <button onClick={handleEdit}>Edit</button>
      </>
    )
  } 

  return(
    <div>
      <form onSubmit={(event) => {handleSubmit(event)}}>
        <label htmlFor='name-input'>Name</label>
        <input id='name-input' onChange={(event) => updateName(event.target.value)} value={nameInput}></input>
        <label htmlFor='email-input'>Email</label>
        <input id='email-input' onChange={(event) => updateEmail(event.target.value)} value={emailInput}></input>
        <label htmlFor='phone-input'>Phone</label>
        <input id='phone-input' onChange={(event) => updatePhone(event.target.value)} value={phoneInput}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}





