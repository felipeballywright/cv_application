import { useState } from "react"

function Experience({company, position, respons, date, handleSubmit, handleDelete}){
    return(
        <div className="basic-container">
            <h2>{company}</h2>
            <p>{position}</p>
            <p>{respons}</p>
            <p>{date}</p>
            <button onClick={handleSubmit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

function ExperienceForm({company, position, respons, date, onCompanyChange, onPositionChange, onResponsChange, onDateChange, handleSubmit, handleDelete}){
    return(
        <form>
            <label for="company-input">Company</label>
            <input id="company-input" value={company} onChange={onCompanyChange}></input>
        
            <label for="position-input">Position</label>
            <input id="position-input" value={position} onChange={onPositionChange}></input>

            <label for="respons-input">Responsabilities</label>
            <input id="respons-input" value={respons} onChange={onResponsChange}></input>

            <label for="date-input">Date</label>
            <input id="date-input" value={date} onChange={onDateChange}></input>

            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleDelete}>Delete</button>
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


    // WORK ON THIS FUNCTION!
    // function handleAddSection(){
    //     setSections(prev => prev)
    //     })
    // }


    return(
        <div>
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
                        handleDelete={() => {handleDelete(section.id)}}
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
                    />
                )
            }    
        })}
        <button onClick={handleAddSection}>Add Section</button>
        </div>
    )
}