import { useState } from "react"

// You have to add the edit button that set submitted back to false :)

function GeneralInfo({name, email, phone}){
    return(
        <div className="basic-container">
            <p className="bold-text">Name</p>
            <p>{name}</p>
            <p className="bold-text">Email</p>
            <p>{email}</p>
            <p className="bold-text">Phone</p>
            <p>{phone}</p>
        </div>
    )
}

export function GeneralInfoForm(){
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(){
        if(!isSubmitted){
            setIsSubmitted(true);
        } else if(isSubmitted){
            setIsSubmitted(false);
        }
    }

    function handleName(event){
        setNameInput(event.target.value);
    }

    function handleEmail(event){
        setEmailInput(event.target.value);
    }

    function handlePhone(event){
        setPhoneInput(event.target.value);
    }

    if(isSubmitted){
        return(
            <>
              <GeneralInfo
                name={nameInput}
                email={emailInput}
                phone={phoneInput}
              />
              <button onClick={handleSubmit}>Edit</button>
            </>
        )
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name-input">Name</label>
            <input onChange={handleName} id="name-input" value={nameInput}></input>
            <label htmlFor="email-input">Email</label>
            <input onChange={handleEmail} id="email-input" value={emailInput}></input>
            <label htmlFor="phone-input">Phone</label>
            <input onChange={handlePhone} id="phone-input" value={phoneInput}></input>
            <button>Submit</button>
        </form>
    )
}