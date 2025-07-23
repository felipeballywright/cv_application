// import { useState } from "react";

// function Education({ university, degree, startDate, endDate }) {
//     return (
//         <div className="basic-container">
//             <p>{university}</p>
//             <p>{degree}</p>
//             <p>{startDate}</p>
//             <p>{endDate}</p>
//         </div>
//     )
// }

// function EducationForm({ university, degree, startDate, endDate, handleUniversity, handleDegree, handleStartDate, handleEndDate, handleDelete, deleteButtonStyle, handleSubmit }) {
//     return (
//         <form onSubmit={handleSubmit} className="basic-container">
//             <label htmlFor="university-input">University/Institution</label>
//             <input id="university-input" value={university} onChange={handleUniversity}></input>

//             <label htmlFor="degree-input">Degree:</label>
//             <input id="degree-input" value={degree} onChange={handleDegree}></input>

//             <label htmlFor="start-date-input">Starting year:</label>
//             <input id="start-date-input" value={startDate} onChange={handleStartDate}></input>

//             <label htmlFor="end-date-input">Graduating year:</label>
//             <input id="end-date-input" value={endDate} onChange={handleEndDate}></input>

//             <button onClick={handleDelete} style={deleteButtonStyle}>Delete</button>
//         </form>
//     )
// }

// export function handleEducationInfo() {
//     const [sections, setSections] = useState([
//         { id: crypto.randomUUID(), university: "", degree: "", startDate: "", endDate: "" }
//     ]);


//     function handleUniversity(event, id) {
//         setSections(prev => prev.map(section => {
//             if (section.id === id) {
//                 return { ...section, university: event.target.value };
//             }
//             return section
//         }));
//     }

//     function handleDegree(event, id) {
//         setSections(prev => prev.map(section => {
//             if (section.id === id) {
//                 return { ...section, degree: event.target.value };
//             }
//             return section
//         }));
//     }

//     function handleStartDate(event, id) {
//         setSections(prev => prev.map(section => {
//             if (section.id === id) {
//                 return { ...section, startDate: event.target.value };
//             }
//             return section
//         }));
//     }

//     function handleEndDate(event, id) {
//         setSections(prev => prev.map(section => {
//             if (section.id === id) {
//                 return { ...section, endDate: event.target.value };
//             }
//             return section
//         }));
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//     }

//     function handleAddSection() {
//         const emptyObj = { id: crypto.randomUUID(), university: "", degree: "", startDate: "", endDate: "" }

//         setSections(prev => {
//             return [
//                 ...prev,
//                 emptyObj
//             ]
//         })
//     }

//     function handleDelete(id) {
//         if (sections.length > 1) {
//             setSections([...sections].filter(section =>
//                 section.id !== id
//             ))
//         }
//     }

//     function isHidden() {
//         if (sections.length > 1) {
//             return "inline"
//         } else {
//             return "none"
//         }
//     }

//     return {
//         leftEducationInfo: (
//             <>
//                 {sections.map((section) => {
//                     if (sections.length > 3) {
//                         null
//                     } else {
//                         return <EducationForm
//                             key={section.id}
//                             university={section.university}
//                             degree={section.degree}
//                             startDate={section.startDate}
//                             endDate={section.endDate}
//                             handleUniversity={(e) => { handleUniversity(e, section.id) }}
//                             handleDegree={(e) => { handleDegree(e, section.id) }}
//                             handleStartDate={(e) => { handleStartDate(e, section.id) }}
//                             handleEndDate={(e) => { handleEndDate(e, section.id) }}
//                             handleDelete={(e) => { handleDelete(e, section.id) }}
//                             deleteButtonStyle={{ display: isHidden() }}
//                             handleSubmit={(e) => handleSubmit(e)}
//                         />
//                     }
//                 })}
//                 <button onClick={handleAddSection} style={sections.length === 3 ? { display: "none" } : { display: "inline" }}>Add degree</button>
//             </>
//         ),
//         rightEducationInfo: (
//             <Education
//                 key={sections.id}
//                 university={sections.university}
//                 degree={sections.degree}
//                 startDate={sections.startDate}
//                 endDate={sections.endDate}
//             />
//         )
//     }
// }