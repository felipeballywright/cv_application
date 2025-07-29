import { useState } from "react"

function ContactInfoForm({ email, phone, location, website, handleEmail, handlePhone, handleLocation, handleWebsite, handleSubmit }) {
    return (
        <form className="basic-container" onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="email-input">Email:</label>
                <input onChange={(event) => { handleEmail(event) }} id="email-input" value={email} placeholder="myemail@mail.com"></input>
            </div>

            <div className="input-group">
                <label htmlFor="phone-input">Phone:</label>
                <input onChange={(event) => { handlePhone(event) }} id="phone-input" value={phone} placeholder="+**********"></input>
            </div>

            <div className="input-group">
                <label htmlFor="location-input">Location:</label>
                <input onChange={(event) => { handleLocation(event) }} id="location-input" value={location} placeholder="City, Country"></input>
            </div>

            <div className="input-group">
                <label htmlFor="website-input">Website:</label>
                <input onChange={(event) => { handleWebsite(event) }} id="website-input" value={website}></input>
            </div>
        </form>
    )
}

function ContactInfo({ email, phone, location, website }) {
    return (
        <div className="cv-basic-container">
            <div className="cv-contact-container">
                <span className="material-icons">email</span>
                <p className="small-text">{email}</p>
            </div>
            <div className="cv-contact-container">
                <span className="material-icons">phone</span>
                <p className="small-text">{phone}</p>
            </div>
            <div className="cv-contact-container">
                <span className="material-icons">location_on</span>
                <p className="small-text">{location}</p>
            </div>
            <div className="cv-contact-container">
                <span className="material-icons">link</span>
                <a className="small-text" href={website}>{website}</a>
            </div>
        </div>
    )
}

export function HandleContactInfo() {
    const [sections, setSections] = useState({
        id: crypto.randomUUID(), email: "", phone: "", location: "", website: ""
    })

    function handleEmail(event) {
        setSections(prev => {
            return {
                ...prev,
                email: event.target.value
            }
        })
    }

    function handlePhone(event) {
        setSections(prev => {
            return {
                ...prev,
                phone: event.target.value
            }
        })
    }

    function handleLocation(event) {
        setSections(prev => {
            return {
                ...prev,
                location: event.target.value
            }
        })
    }

    function handleWebsite(event) {
        setSections(prev => {
            return {
                ...prev,
                website: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return {
        contactInfoLeft: (
            <>
                <h2 className="form-title">Contact Info</h2>
                <div className="division-line"></div>
                <ContactInfoForm
                    key={sections.id}
                    email={sections.email}
                    phone={sections.phone}
                    location={sections.location}
                    website={sections.website}
                    handleEmail={(e) => handleEmail(e)}
                    handlePhone={(e) => handlePhone(e)}
                    handleLocation={(e) => handleLocation(e)}
                    handleWebsite={(e) => handleWebsite(e)}
                    handleSubmit={(e) => handleSubmit(e)}
                />
            </>
        ),
        contactInfoRight: (
            <ContactInfo
                key={sections.id}
                email={sections.email}
                phone={sections.phone}
                location={sections.location}
                website={sections.website}
            />
        )
    }

}