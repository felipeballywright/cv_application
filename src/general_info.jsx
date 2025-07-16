import { useState } from "react"

// You have to add the edit button that set submitted back to false :)

function GeneralInfo({name, email, phone, handleSubmit}){
    return(
        <div className="basic-container">
            <p className="bold-text">Name</p>
            <p>{name}</p>
            <p className="bold-text">Email</p>
            <p>{email}</p>
            <p className="bold-text">Phone</p>
            <p>{phone}</p>
            <button onClick={handleSubmit}>Edit</button>
        </div>
    )
}

// ESTA FUNCION NO FUNCIONA (je je)

export function GeneralInfoForm(){
    const [sections, setSections] = useState({
        id: crypto.randomUUID(), name: "", email: "", phone: "", isSubmitted: false
    })

    function handleSubmit(){
        if(sections.isSubmitted){
            setSections(prev => {
                return{
                    ...prev,
                    isSubmitted: false
                }
            })
        } else{
            setSections(prev => {
                return{
                    ...prev,
                    isSubmitted: true
                }
            })
        }
    }

    function handleName(event){  
        setSections(prev => {
            return{
                ...prev,
                name: event.target.value
            }
        })
    }

    function handleEmail(event){
        setSections(prev => {
            return{
                ...prev,
                email: event.target.value
            }
        })
    }

    function handlePhone(event){
        setSections(prev => {
            return{
                ...prev,
                phone: event.target.value
            }
        })
    }

    if(sections.isSubmitted){
        console.log(sections);
        return(
            <>
                <GeneralInfo
                    name={sections.name}
                    phone={sections.phone}
                    email={sections.email}
                />
                {/* <button onClick={handleSubmit}>Edit</button> */}
            </>
        )
    } else if(!sections.isSubmitted){
        return(
            <form onSubmit={handleSubmit} className="basic-container">
                <label htmlFor="name-input">Name</label>
                <input onChange={(event) => {handleName(event)}} id="name-input" value={sections.name}></input>
                <label htmlFor="email-input">Email</label>
                <input onChange={handleEmail} id="email-input" value={sections.email}></input>
                <label htmlFor="phone-input">Phone</label>
                <input onChange={handlePhone} id="phone-input" value={sections.phone}></input>
                <button>Submit</button>
            </form>
        )
    }
}