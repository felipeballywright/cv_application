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

// ESTA FUNCION NO FUNCIONA (je je)

export function GeneralInfoForm(){
    const [sections, setSections] = useState({
        id: crypto.randomUUID(), name: "", email: "", phone: "", isSubmitted: false
    })
    // const [nameInput, setNameInput] = useState('');
    // const [emailInput, setEmailInput] = useState('');
    // const [phoneInput, setPhoneInput] = useState('');
    // const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(){
        if(!sections.isSubmitted){
            setSections(prev => prev.map(sections => {
                return{
                    ...sections,
                    isSubmitted: true
                }
            }))
        } else if(sections.isSubmitted){
            setSections(prev => prev.map(sections => {
                return{
                    ...sections,
                    isSubmitted: false
                }
            }))
        }
    }

    function handleName(event){     
        setSections(prev => prev.map(section => {
            return{
                ...section,
                name: event.target.value
            }
        }))
    }

    function handleEmail(event){
        setSections(prev => prev.map(section => {
            return{
                ...section,
                email: event.target.value
            }
        }))
    }

    function handlePhone(event){
        setSections(prev => prev.map(section => {
            return{
                ...section,
                phone: event.target.value
            }
        }))
    }

    if(isSubmitted){
        return(
            <>
              <GeneralInfo
                name={sections.name}
                email={sections.email}
                phone={sections.phone}
              />
              <button onClick={handleSubmit}>Edit</button>
            </>
        )
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name-input">Name</label>
            <input onChange={handleName} id="name-input" value={sections.name}></input>
            <label htmlFor="email-input">Email</label>
            <input onChange={handleEmail} id="email-input" value={sections.email}></input>
            <label htmlFor="phone-input">Phone</label>
            <input onChange={handlePhone} id="phone-input" value={sections.phone}></input>
            <button>Submit</button>
        </form>
    )
}