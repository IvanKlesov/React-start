import React from 'react';


const MySelect =({options,defaultValue,value, onChange}) => {
    return (
        <select value={value} onChange={event => onChange(event.target.value)}>
            <option value="" disabled>{defaultValue}</option>
            {options.map(option => 
                <option key={option.key} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default MySelect;