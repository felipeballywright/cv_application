import { useState } from "react";

function Education({ university, degree, startDate, endDate }) {
    return (
        <div className="cv-basic-container">
            <h4>{degree}</h4>
            <p>{university}</p>
            <p>{startDate} - {endDate}</p>
        </div>
    )
}

function EducationForm({ university, degree, startDate, endDate, handleUniversity, handleDegree, handleStartDate, handleEndDate, handleDelete, deleteButtonStyle, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="basic-container">
            <div className="input-group">
                <label htmlFor="university-input">University/Institution</label>
                <input id="university-input" value={university} onChange={handleUniversity} placeholder="University/Institution"></input>
            </div>

            <div className="input-group">
                <label htmlFor="degree-input">Degree:</label>
                <input id="degree-input" value={degree} onChange={handleDegree} placeholder="Degree"></input>
            </div>

            <div className="input-group">
                <label htmlFor="start-date-input">Starting year:</label>
                <input id="education-start-date-input" type="date" value={startDate} onChange={handleStartDate}></input>
            </div>

            <div className="input-group">
                <label htmlFor="end-date-input">Graduating year:</label>
                <input id="education-end-date-input" type="date" value={endDate} onChange={handleEndDate}></input>
            </div>

            <button className="basic-button" onClick={handleDelete} style={deleteButtonStyle}>Delete</button>
        </form>
    )
}

export function handleEducationInfo() {
    const [sections, setSections] = useState([
        { id: crypto.randomUUID(), university: "", degree: "", startDate: "", endDate: "" }
    ]);


    function handleUniversity(event, id) {
        setSections(prev => prev.map(section => {
            if (section.id === id) {
                return { ...section, university: event.target.value };
            }
            return section
        }));
    }

    function handleDegree(event, id) {
        setSections(prev => prev.map(section => {
            if (section.id === id) {
                return { ...section, degree: event.target.value };
            }
            return section
        }));
    }

    function handleStartDate(event, id) {
        setSections(prev => prev.map(section => {
            if (section.id === id) {
                return { ...section, startDate: event.target.value };
            }
            return section
        }));
    }

    function handleEndDate(event, id) {
        setSections(prev => prev.map(section => {
            if (section.id === id) {
                return { ...section, endDate: event.target.value };
            }
            return section
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleAddSection() {
        const emptyObj = { id: crypto.randomUUID(), university: "", degree: "", startDate: "", endDate: "" }

        setSections(prev => {
            return [
                ...prev,
                emptyObj
            ]
        })
    }

    function handleDelete(id) {
        if (sections.length > 1) {
            setSections([...sections].filter(section =>
                section.id !== id
            ))
        }
    }

    function isHidden() {
        if (sections.length > 1) {
            return "inline"
        } else {
            return "none"
        }
    }

    function formatStartDateLocal(inputDate) {
        return new Date(inputDate).toLocaleDateString();
    }

    function formatEndDateLocal(inputDate) {
        return new Date(inputDate).toLocaleDateString();
    }

    return {
        leftEducationInfo: (
            <>
                <h2 className="form-title">Education Background</h2>
                <div className="division-line"></div>
                {sections.map((section) => {
                    if (sections.length > 3) {
                        return
                    } else {
                        return <EducationForm
                            key={section.id}
                            university={section.university}
                            degree={section.degree}
                            startDate={section.startDate}
                            endDate={section.endDate}
                            handleUniversity={(e) => { handleUniversity(e, section.id) }}
                            handleDegree={(e) => { handleDegree(e, section.id) }}
                            handleStartDate={(e) => { handleStartDate(e, section.id) }}
                            handleEndDate={(e) => { handleEndDate(e, section.id) }}
                            handleDelete={() => { handleDelete(section.id) }}
                            deleteButtonStyle={{ display: isHidden() }}
                            handleSubmit={(e) => handleSubmit(e)}
                        />
                    }
                })}
                <button className="basic-button" onClick={handleAddSection} style={sections.length === 3 ? { display: "none" } : { display: "inline" }}>Add Education</button>
            </>
        ),
        rightEducationInfo: (
            <>
                {sections.map(section => (
                    <Education
                        key={section.id}
                        university={section.university}
                        degree={section.degree}
                        startDate={formatStartDateLocal(section.startDate)}
                        endDate={formatEndDateLocal(section.endDate)}
                    />
                ))}
            </>
        )
    }
}