import { useState } from "react";

// Store an array of unique IDs/objects.
// Use .map() to render <EducationForm /> based on that array.
// On delete, filter out the ID.
// Add new sections by appending a new ID.

function Education({title, school, date}){
    return(
        <div className="basic-container">
            <h2>{title}</h2>
            <p className="bold-text">{school}</p>
            <p>{date}</p>
        </div>
    )
}

export function HandleEducation(){
    console.log("Running HandleEducation");
    const educationData = [];

    function handleSubmit(){

    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title-input">Title</label>
            <input id="title-input"></input>
            <label htmlFor="school-input">School</label>
            <input id="school-input"></input>
            <label htmlFor="date-input">Date</label>
            <input id="date-input"></input>
            <button>Submit</button>
        </form>
    )
}

// function EducationForm(){
//     const [titleInput, setTitleInput] = useState('');
//     const [schoolInput, setSchoolInput] = useState('');
//     const [dateInput, setDateInput] = useState('');
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     function handleSubmit(){
//         if(!isSubmitted){
//             setIsSubmitted(true);
//         } else if(isSubmitted){
//             setIsSubmitted(false);
//         }
//     }

//     function handleTitle(event){
//        setTitleInput(event.target.value);
//     }

//     function handleSchool(event){
//        setSchoolInput(event.target.value);
//     }

//     function handleDate(event){
//        setDateInput(event.target.value);
//     }

//     if(isSubmitted){
//         return(
//             <>
//               <Education
//                 title={titleInput}
//                 school={schoolInput}
//                 date={dateInput}
//               />
//               <button onClick={handleSubmit}>Edit</button>
//             </>
//         )
//     }
    
//     return(
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="title-input">Title</label>
//             <input onChange={handleTitle} id="title-input" value={titleInput}></input>
//             <label htmlFor="school-input">School</label>
//             <input onChange={handleSchool} id="school-input" value={schoolInput}></input>
//             <label htmlFor="date-input">Date</label>
//             <input onChange={handleDate} id="date-input" value={dateInput}></input>
//             <button>Submit</button>
//         </form>
//     )
// }

// export function EducationRender(){
//     const [render, setRender] = useState([
//         <div id={crypto.randomUUID()}>
//             <EducationForm></EducationForm>
//             <button onClick={deleteSection}>Delete</button>
//         </div>
//     ]);

//     function addSection(){
//         console.log(render);
//         // setRender(render.push(
//         //     <p>Hello</p>
//         // ));
//     }

//     function deleteSection(event){
//         // console.log("deleteSection says:", event.target.parentElement.id);
//         for (let index = 0; index < render.length; index++) {
               
//         }
//     }

//     return(
//         <div>
//             {render}
//             <button onClick={addSection}>Add Section</button>
//         </div>
//     )
// }
