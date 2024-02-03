import React from "react";

export default function Button({className, context, click}){
    return(
        <button onClick={() => click()} className={className}>{context}</button>
    )}
