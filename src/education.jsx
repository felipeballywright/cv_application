import { useState } from "react";

function Education({title, school, date, handleSubmit, handleDelete}){
    return(
        <div className="basic-container">
            <h2>{title}</h2>
            <p className="bold-text">{school}</p>
            <p>{date}</p>
            <button onClick={handleSubmit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

function EducationForm({title, school, date, onTitleChange, onSchoolChange, onDateChange, handleSubmit, handleDelete}){
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title-input">Title</label>
            <input id="title-input" value={title} onChange={onTitleChange}></input>

            <label htmlFor="school-input">School</label>
            <input id="school-input" value={school} onChange={onSchoolChange}></input>

            <label htmlFor="date-input">Date</label>
            <input id="date-input" value={date} onChange={onDateChange}></input>

            <button>Submit</button>
            <button onClick={handleDelete}>Delete</button>
        </form>
    )
}

function EducationRender(){
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

    function handleAddEducation(){
        setSections(prev => {
            return [
                ...prev, 
                {id: crypto.randomUUID(), title: "", school: "", date: "", isSubmitted: false}
            ]
        })
    }

    function handleDelete(id){
        setSections([ ...sections ].filter(section => 
            section.id !== id
        ))
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
                    />
                }
            })}
            <button onClick={handleAddEducation}>Add Education</button>
        </div>
    )
}