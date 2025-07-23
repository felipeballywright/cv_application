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

    return (
        <Layout
            leftHalf={
                <>
                    <div key="basicInfoLeft">{basicInfoLeft}</div>
                    <div key="contactInfoLeft">{contactInfoLeft}</div>
                    <div key="leftEducationInfo">{leftEducationInfo}</div>
                    <div key="leftExperienceInfo">{leftExperienceInfo}</div>
                </>
            }
            rightHalf={
                <>
                    <div key="basicInfoRight">{basicInfoRight}</div>
                    <div key="contactInfoRight">{contactInfoRight}</div>
                    <div key="rightEducationInfo">{rightEducationInfo}</div>
                    <div key="rightExperienceInfo">{rightExperienceInfo}</div>
                </>
            }
        />
    );
}