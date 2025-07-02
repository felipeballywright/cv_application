import { useState } from "react";

function Education({title, school, date}){
    return(
        <div className="basic-container">
            <h2>{title}</h2>
            <p className="bold-text">{school}</p>
            <p>{date}</p>
        </div>

    )
}

function EducationForm(){
    const [titleInput, setTitleInput] = useState('');
    const [schoolInput, setSchoolInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(){
        if(!isSubmitted){
            setIsSubmitted(true);
        } else if(isSubmitted){
            setIsSubmitted(false);
        }
    }

    function handleTitle(event){
       setTitleInput(event.target.value);
    }

    function handleSchool(event){
       setSchoolInput(event.target.value);
    }

    function handleDate(event){
       setDateInput(event.target.value);
    }

    if(isSubmitted){
        return(
            <>
              <Education
                title={titleInput}
                school={schoolInput}
                date={dateInput}
              />
              <button onClick={handleSubmit}>Edit</button>
            </>
        )
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title-input">Title</label>
            <input onChange={handleTitle} id="title-input" value={titleInput}></input>
            <label htmlFor="school-input">School</label>
            <input onChange={handleSchool} id="school-input" value={schoolInput}></input>
            <label htmlFor="date-input">Date</label>
            <input onChange={handleDate} id="date-input" value={dateInput}></input>
            <button>Submit</button>
        </form>
    )
}

export function EducationRender(){
    const [render, setRender] = useState(<EducationForm></EducationForm>);

    function addSection(){
        setRender(
            <>
                {render}
                <EducationForm></EducationForm>
            </>
        );
    }

    return(
        <>
            {render}
            <button onClick={addSection}>Add Section</button>
        </>
    )
}
