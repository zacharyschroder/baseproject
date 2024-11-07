import React from "react";
import { useState } from "react";

export default function Link(props) {
    const { to } = props
    const [ label, setLabel ] = useState("Home")

    function handleClick() {
        setLabel("Features")
    }

    return (
        <a 
            to={to} 
            className="text-2xl cursor-pointer text-neutral-400 hover:text-neutral-800 mr-4"
            onClick={handleClick}
        >
            {label}
        </a>
    );
}