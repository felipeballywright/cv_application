import { useState } from "react";
import { HandleBasicInfo } from "./basic_info";
import { HandleContactInfo } from "./contact_info";
import { handleEducationInfo } from "./education_info";
import { handleExperienceInfo } from "./experience_info";

export function Layout({ leftHalf, rightHalf }) {
    return (
        <div id="both-halves">
            <div id="left-half">
                <h1>CV Generator</h1>
                <p>
                    Build your CV by completing the forms below! The preview will update automatically as you make changes.
                </p>
                {leftHalf}
            </div>
            <div id="right-half">
                {rightHalf}
            </div>
        </div>
    )
}

export function HandleLayout() {
    const { basicInfoLeft, basicInfoRight } = HandleBasicInfo();
    const { contactInfoLeft, contactInfoRight } = HandleContactInfo();
    const { leftEducationInfo, rightEducationInfo } = handleEducationInfo();
    const { leftExperienceInfo, rightExperienceInfo } = handleExperienceInfo();

    function formatDateLocal(inputDate){
        const formatted = new Date(inputDate).toLocaleDateString();
    }

    return (
        <Layout
            leftHalf={
                <>
                    <div className="section-container" key="basicInfoLeft">{basicInfoLeft}</div>
                    <div className="section-container" key="contactInfoLeft">{contactInfoLeft}</div>
                    <div className="section-container" key="leftEducationInfo">{leftEducationInfo}</div>
                    <div className="section-container" key="leftExperienceInfo">{leftExperienceInfo}</div>
                </>
            }
            rightHalf={
                <div id="cv">
                    <div id="cv-top-container">
                        {basicInfoRight}
                        {contactInfoRight}
                    </div>
                    <div id="cv-bottom-container">
                        <h3>Education Background</h3>
                        <div className="cv-division-line"></div>
                        <div key="rightEducationInfo">{rightEducationInfo}</div>
                        <h3>Work Experience</h3>
                        <div className="cv-division-line"></div>
                        <div key="rightExperienceInfo">{rightExperienceInfo}</div>
                    </div>
                </div>
            }
        />
    );
}