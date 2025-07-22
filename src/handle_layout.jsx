import { useState } from "react";
import { HandleBasicInfo } from "./basic_info";
import { HandleContactInfo } from "./contact_info";

export function Layout({leftHalf, rightHalf}){
    return(
        <div id="both-halves">
            <div id="left-half">
                {leftHalf}
            </div>
            <div id="right-half">
                {rightHalf}
            </div>
        </div>
    )
}

export function HandleLayout(){
    const { basicInfoLeft, basicInfoRight } = HandleBasicInfo();
    const { contactInfoLeft, contactInfoRight } = HandleContactInfo();

    return(
        <Layout
            leftHalf={[basicInfoLeft, contactInfoLeft]}
            rightHalf={[basicInfoRight, contactInfoRight]}
        />
    )
}