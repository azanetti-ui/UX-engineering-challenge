import React from "react";

/** Form elements */
function Input (props) {
    const { size = 'medium', ...rest } = props
    return (
            <input 
            type="text" 
            name="Search Hero" 
            placeholder="Placeholder..." 
            autoComplete="off"
            aria-label="Search Hero"
            className={`input ${size}`} {...rest} />            
    )
}

export default Input