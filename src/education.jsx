import { useState } from "react";

// READ THE CODE, MAKE SURE YOU UNDERSTAND EVERY LITTLE NUANCE BEFORE MOVING ON
// PAY ATTENTION AT THE USE OF PROPS AND HOW THEY ARE PASSED DOWN FROM THE PARENT FUNCTION

function Education({title, school, date}){
    return(
        <div className="basic-container">
            <h2>{title}</h2>
            <p className="bold-text">{school}</p>
            <p>{date}</p>
        </div>
    )
}

function EducationForm({title, school, date, onTitleChange, onSchoolChange, onDateChange, handleSubmit}){
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title-input">Title</label>
            <input id="title-input" value={title} onChange={onTitleChange}></input>

            <label htmlFor="school-input">School</label>
            <input id="school-input" value={school} onChange={onSchoolChange}></input>

            <label htmlFor="date-input">Date</label>
            <input id="date-input" value={date} onChange={onDateChange}></input>

            <button>Submit</button>
        </form>
    )
}

function EducationRender(){
    const [sections, setSections] = useState([
        {id: crypto.randomUUID(), title: "", school: "", date: "", isSubmitted: false}
    ]);

    // YOU'RE READY TO RIGHT THE HANDLERS!

    return(
        <div>
            {sections.map((section) => {
                if(section.isSubmitted){
                    return <Education 
                        key={section.id}
                        title={section.title} 
                        school={section.school} 
                        date={section.date}
                    />
                } else{
                    return <EducationForm 
                        key={section.id}
                        title={section.title} 
                        school={section.school} 
                        date={section.date}
                        onTitleChange={(e) => {onTitleChange(e, section.id)}}
                        onSchoolChange={(e) => {onSchoolChange(e, section.id)}}
                        onDateChange={(e) => {onDateChange(e, section.id)}}
                        handleSubmit={(e) => {handleSubmit(e, section.id)}}
                    />
                }
            })}
        </div>
    )
}