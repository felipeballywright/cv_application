import { useState } from "react";
import { HandleBasicInfo } from "./basic_info";

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
    const { left, right } = HandleBasicInfo();

    return(
        <Layout
            leftHalf={left}
            rightHalf={right}
        />
    )
}