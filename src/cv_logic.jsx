import { useState } from "react"

export function BasicInfoForm({firstName, lastName, proTitle, summary, handleFirstName, handleLastName, handleproTitle, handleSummary}){
    return(
        <form className="basic-container">
            <label htmlFor="first-name-input">First Name:</label>
            <input onChange={(event) => {handleFirstName(event)}} id="first-name-input" value={sections.firstName}></input>
            <label htmlFor="last-name-input">Last Name:</label>
            <input onChange={(event) => {handleLastName(event)}} id="last-name-input" value={sections.lastName}></input>
            <label htmlFor="pro-title-input">Professional Title:</label>
            <input onChange={(event) => {handleproTitle(event)}} id="pro-title-input" value={sections.proTitle}></input>
            <label htmlFor="summary">A summary about yourself:</label>
            <input onChange={(event) => {handleSummary(event)}} id="summary" value={sections.summary}></input>
            <button>Submit</button>
        </form>
    )
}

export function BasicInfo({firstName, lastName, proTitle, summary}){
    return(
        <div className="basic-container">
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{proTitle}</p>
            <p>{summary}</p>
        </div>
    )
}

export function HandleBasicInfo(){
    const [sections, setSections] = useState({
        id: crypto.randomUUID(), firstName: "", lastName: "", proTitle: "", summary: ""
    })

    function handleFirstName(event){  
        setSections(prev => {
            return{
                ...prev,
                firstName: event.target.value
            }
        })
    }

    function handleLastName(event){  
        setSections(prev => {
            return{
                ...prev,
                lastName: event.target.value
            }
        })
    }

    function handleproTitle(event){  
        setSections(prev => {
            return{
                ...prev,
                proTitle: event.target.value
            }
        })
    }

    function handleSummary(event){  
        setSections(prev => {
            return{
                ...prev,
                summary: event.target.value
            }
        })
    }   

    return(
        <div id="both-halves">
            <div id="left-half">
                <BasicInfoForm
                    firstName={sections.firstName}
                    lastName={sections.lastName} 
                    proTitle={sections.proTitle} 
                    summary={sections.summary} 
                    handleFirstName
                    handleLastName 
                    handleproTitle 
                    handleSummary
                />
            </div>
            <div id="right-half">

            </div>
        </div>
    )
}

