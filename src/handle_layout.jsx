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

    console.log(leftEducationInfo, rightEducationInfo, leftExperienceInfo, rightExperienceInfo);

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
                        <div key="basicInfoRight">{basicInfoRight}</div>
                        <div key="contactInfoRight">{contactInfoRight}</div>
                    </div>
                    <div id="cv-bottom-container">
                        <div key="rightEducationInfo">{rightEducationInfo}</div>
                        <div key="rightExperienceInfo">{rightExperienceInfo}</div>
                    </div>
                </div>
            }
        />
    );
}