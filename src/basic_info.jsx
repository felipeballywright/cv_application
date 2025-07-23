import { useState } from "react"

export function BasicInfoForm({ firstName, lastName, proTitle, summary, handleFirstName, handleLastName, handleproTitle, handleSummary, handleSubmit }) {
    return (
        <form className="basic-container" onSubmit={handleSubmit}>
            <label htmlFor="first-name-input">First Name:</label>
            <input onChange={(event) => { handleFirstName(event) }} id="first-name-input" value={firstName} placeholder="First Name"></input>

            <label htmlFor="last-name-input">Last Name:</label>
            <input onChange={(event) => { handleLastName(event) }} id="last-name-input" value={lastName} placeholder="Last Name"></input>

            <label htmlFor="pro-title-input">Professional Title:</label>
            <input onChange={(event) => { handleproTitle(event) }} id="pro-title-input" value={proTitle} placeholder="Professional Title"></input>

            <label htmlFor="summary">A summary about yourself:</label>
            <input onChange={(event) => { handleSummary(event) }} id="summary" value={summary}></input>
        </form>
    )
}

export function BasicInfo({ firstName, lastName, proTitle, summary }) {
    return (
        <div className="basic-container">
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{proTitle}</p>
            <p>{summary}</p>
        </div>
    )
}

export function HandleBasicInfo() {
    const [sections, setSections] = useState({
        id: crypto.randomUUID(), firstName: "", lastName: "", proTitle: "", summary: ""
    })

    function handleFirstName(event) {
        setSections(prev => {
            return {
                ...prev,
                firstName: event.target.value
            }
        })
    }

    function handleLastName(event) {
        setSections(prev => {
            return {
                ...prev,
                lastName: event.target.value
            }
        })
    }

    function handleproTitle(event) {
        setSections(prev => {
            return {
                ...prev,
                proTitle: event.target.value
            }
        })
    }

    function handleSummary(event) {
        setSections(prev => {
            return {
                ...prev,
                summary: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return {
        basicInfoLeft: (
            <>
                <h2 className="form-title">Basic Info</h2>
                <div className="division-line"></div>
                <BasicInfoForm
                    key={sections.id}
                    firstName={sections.firstName}
                    lastName={sections.lastName}
                    proTitle={sections.proTitle}
                    summary={sections.summary}
                    handleFirstName={(e) => handleFirstName(e)}
                    handleLastName={(e) => handleLastName(e)}
                    handleproTitle={(e) => handleproTitle(e)}
                    handleSummary={(e) => handleSummary(e)}
                    handleSubmit={(e) => handleSubmit(e)}
                />
            </>
        ),
        basicInfoRight: (
            <BasicInfo
                key={sections.id}
                firstName={sections.firstName}
                lastName={sections.lastName}
                proTitle={sections.proTitle}
                summary={sections.summary}
            />
        )
    }
}

