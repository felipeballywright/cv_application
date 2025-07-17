import { useState } from "react"

function Experience({company, position, respons, date, handleSubmit, handleDelete, deleteButtonStyle}){
    return(
        <div>
            <h2>{company}</h2>
            <p>{position}</p>
            <p>{respons}</p>
            <p>{date}</p>
            <button onClick={handleSubmit}>Edit</button>
            <button onClick={handleDelete} style={deleteButtonStyle}>Delete</button>
        </div>
    )
}

function ExperienceForm({company, position, respons, date, onCompanyChange, onPositionChange, onResponsChange, onDateChange, handleSubmit, handleDelete, deleteButtonStyle}){
    return(
        <form onSubmit={handleSubmit} className="basic-form">
            <label htmlFor="company-input">Company</label>
            <input id="company-input" value={company} onChange={onCompanyChange}></input>
        
            <label htmlFor="position-input">Position</label>
            <input id="position-input" value={position} onChange={onPositionChange}></input>

            <label htmlFor="respons-input">Responsabilities</label>
            <input id="respons-input" value={respons} onChange={onResponsChange}></input>

            <label htmlFor="date-input">Date</label>
            <input id="date-input" value={date} onChange={onDateChange}></input>

            <button>Submit</button>
            <button onClick={handleDelete} style={deleteButtonStyle}>Delete</button>
        </form>
    )
}

export function ExperienceRender(){
    const [sections, setSections] = useState([
        { id: crypto.randomUUID(), company: "", position: "", respons: "", date: "", isSubmitted: false }
    ])

    function handleSubmit(e, id){
        e.preventDefault();

        setSections(sections.map(section => {
            if(section.id === id){
                section.isSubmitted ? section.isSubmitted = false : section.isSubmitted = true;
                return section
            }
            return section
        }))
    }

    function onCompanyChange(e, id){
        setSections(prev => prev.map(section => {
            if(section.id === id){
                return { ...section, company: e}
            }
            return section
        }))
    }

    function onPositionChange(e, id){
        setSections(prev => prev.map(section => {
            if(section.id === id){
                return { ...section, position: e}
            }
            return section
        }))
    }

    function onResponsChange(e, id){
        setSections(prev => prev.map(section => {
            if(section.id === id){
                return { ...section, respons: e}
            }
            return section
        }))
    }

    function onDateChange(e, id){
        setSections(prev => prev.map(section => {
            if(section.id === id){
                return { ...section, date: e}
            }
            return section
        }))
    }

    function handleAddSection(){
        const emptyObj = { id: crypto.randomUUID(), company: "", position: "", respons: "", date: "", isSubmitted: false };
        
        if(sections[sections.length - 1].isSubmitted){
            setSections(prev => {
                return[
                    ...prev,
                    emptyObj
                ]
            })
        } else{
            alert("Please submit the last section before adding a new one.");
        }
    }

    function handleDelete(e, id){
        e.preventDefault();

        if(sections.length > 1){
            setSections([ ...sections ].filter(section => 
            section.id !== id
            ))
        }      
    }

    function isHidden(){
        if(sections.length > 1){
            return "inline"
        } else{
            return "none"
        }
    }

    return(
        <div className="basic-container">
            {sections.map(section => {
            if(section.isSubmitted){
                return(
                        <Experience 
                            key={section.id}
                            company={section.company}
                            position={section.position}
                            respons={section.respons}
                            date={section.date}
                            handleSubmit={(e) => {handleSubmit(e, section.id)}}
                            handleDelete={(e) => {handleDelete(e, section.id)}}
                            deleteButtonStyle={{display: isHidden()}}
                        />
                )
            } else if(!section.isSubmitted){
                return(
                    <ExperienceForm
                        key={section.id}
                        company={section.company}
                        position={section.position}
                        respons={section.respons}
                        date={section.date}
                        onCompanyChange={(e) => {onCompanyChange(e.target.value, section.id)}}
                        onPositionChange={(e) => {onPositionChange(e.target.value, section.id)}}
                        onResponsChange={(e) => {onResponsChange(e.target.value, section.id)}}
                        onDateChange={(e) => {onDateChange(e.target.value, section.id)}}
                        handleSubmit={(e) => {handleSubmit(e, section.id)}}
                        handleDelete={(e) => {handleDelete(e, section.id)}}
                        deleteButtonStyle={{display: isHidden()}}
                    />
                )
            }    
        })}
            <button onClick={handleAddSection}>Add Section</button>
        </div>
    )
}