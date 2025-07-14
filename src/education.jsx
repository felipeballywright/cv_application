import { useState } from "react";

function Education({title, school, date, handleSubmit, handleDelete, deleteButtonStyle}){
    return(
        <div className="basic-container">
            <h2>{title}</h2>
            <p className="bold-text">{school}</p>
            <p>{date}</p>
            <button onClick={handleSubmit}>Edit</button>
            <button onClick={handleDelete} style={deleteButtonStyle}>Delete</button>
        </div>
    )
}

function EducationForm({title, school, date, onTitleChange, onSchoolChange, onDateChange, handleSubmit, handleDelete, deleteButtonStyle}){
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title-input">Title</label>
            <input id="title-input" value={title} onChange={onTitleChange}></input>

            <label htmlFor="school-input">School</label>
            <input id="school-input" value={school} onChange={onSchoolChange}></input>

            <label htmlFor="date-input">Date</label>
            <input id="date-input" value={date} onChange={onDateChange}></input>

            <button>Submit</button>
            <button onClick={handleDelete} style={deleteButtonStyle}>Delete</button>
        </form>
    )
}

export function EducationRender(){
    const [sections, setSections] = useState([
        {id: crypto.randomUUID(), title: "", school: "", date: "", isSubmitted: false}
    ]);


    function onTitleChange(event, id){
        setSections(prev => prev.map(section => {
            if (section.id === id) {
                return { ...section, title: event };
            }
        return section
    }));
    }

    function onSchoolChange(event, id){
        setSections(prev => prev.map(section => {
            if(section.id === id){
                return { ...section, school: event }
            }
            return section
        }))
    }

    function onDateChange(event, id){
        setSections(prev => prev.map(section => {
            if(section.id === id){
                return { ...section, date: event }
            }
            return section
        }))
    }

    function handleSubmit(event, id){
        event.preventDefault();

        setSections(prev => prev.map(section => {
            if(section.id === id){
                if(section.isSubmitted){
                    return { ...section, isSubmitted: false}
                } else if(!section.isSubmitted){
                    return { ...section, isSubmitted: true}
                }
                return section
            }
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

    function handleDelete(id){
        setSections([ ...sections ].filter(section => 
            section.id !== id
        ))
    }

    function isHidden(){
        if(sections.length > 1){
            return "inline"
        } else{
            return "none"
        }
    }

    return(
        <div>
            {sections.map((section) => {
                if(section.isSubmitted){
                    return <Education 
                        key={section.id}
                        title={section.title} 
                        school={section.school} 
                        date={section.date}
                        handleSubmit={(e) => {handleSubmit(e, section.id)}}
                        handleDelete={() => {handleDelete(section.id)}}
                        deleteButtonStyle={{display: isHidden()}}
                    />
                } else{
                    return <EducationForm 
                        key={section.id}
                        title={section.title} 
                        school={section.school} 
                        date={section.date}
                        onTitleChange={(e) => {onTitleChange(e.target.value, section.id)}}
                        onSchoolChange={(e) => {onSchoolChange(e.target.value, section.id)}}
                        onDateChange={(e) => {onDateChange(e.target.value, section.id)}}
                        handleSubmit={(e) => {handleSubmit(e, section.id)}}
                        handleDelete={() => {handleDelete(section.id)}}
                        deleteButtonStyle={{display: isHidden()}}
                    />
                }
            })}
            <button onClick={handleAddSection}>Add Education</button>
        </div>
    )
}