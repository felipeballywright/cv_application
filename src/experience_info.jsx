import { useState } from "react";

function Experience({ title, company, startDate, endDate }) {
    return (
        <div className="basic-container">
            <p>{title}</p>
            <p>{company}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
        </div>
    )
}

function ExperienceForm({ title, company, startDate, endDate, handleTitle, handleCompany, handleStartDate, handleEndDate, handleDelete, deleteButtonStyle, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="basic-container">
            <div className="input-group">
                <label htmlFor="title-input">Title/Position</label>
                <input id="title-input" value={title} onChange={handleTitle} placeholder="Title/Position"></input>
            </div>

            <div className="input-group">
                <label htmlFor="company-input">Company:</label>
                <input id="company-input" value={company} onChange={handleCompany} placeholder="Company"></input>

            </div>

            <div className="input-group">
                <label htmlFor="experience-start-date-input">Starting year:</label>
                <input id="experience-start-date-input" type="date" value={startDate} onChange={handleStartDate}></input>
            </div>

            <div className="input-group">
                <label htmlFor="experience-end-date-input">End year:</label>
                <input id="experience-end-date-input" type="date" value={endDate} onChange={handleEndDate}></input>
            </div>

            <button className="basic-button" onClick={handleDelete} style={deleteButtonStyle}>Delete</button>
        </form>
    )
}

export function handleExperienceInfo() {
    const [sections, setSections] = useState([
        { id: crypto.randomUUID(), title: "", company: "", startDate: "", endDate: "" }
    ]);


    function handleTitle(event, id) {
        setSections(prev => prev.map(section => {
            if (section.id === id) {
                return { ...section, title: event.target.value };
            }
            return section
        }));
    }

    function handleCompany(event, id) {
        setSections(prev => prev.map(section => {
            if (section.id === id) {
                return { ...section, company: event.target.value };
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
        const emptyObj = { id: crypto.randomUUID(), title: "", company: "", startDate: "", endDate: "" }

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

    return {
        leftExperienceInfo: (
            <>
                <h2 className="form-title">Work Experience</h2>
                <div className="division-line"></div>
                {sections.map((section) => {
                    if (sections.length > 3) {
                        return
                    } else {
                        return <ExperienceForm
                            key={section.id}
                            title={section.university}
                            company={section.degree}
                            startDate={section.startDate}
                            endDate={section.endDate}
                            handleTitle={(e) => { handleTitle(e, section.id) }}
                            handleCompany={(e) => { handleCompany(e, section.id) }}
                            handleStartDate={(e) => { handleStartDate(e, section.id) }}
                            handleEndDate={(e) => { handleEndDate(e, section.id) }}
                            handleDelete={() => { handleDelete(section.id) }}
                            deleteButtonStyle={{ display: isHidden() }}
                            handleSubmit={(e) => handleSubmit(e)}
                        />
                    }
                })}
                <button className="basic-button" onClick={handleAddSection} style={sections.length === 3 ? { display: "none" } : { display: "inline" }}>Add Experience</button>
            </>
        ),
        rightExperienceInfo: (
            <>
                {sections.map(section => (
                    <Experience
                        key={section.id}
                        title={section.title}
                        company={section.company}
                        startDate={section.startDate}
                        endDate={section.endDate}
                    />
                ))}
            </>
        )
    }
}