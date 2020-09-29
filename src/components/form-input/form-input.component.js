import React from "react";
import './form-input.styles.scss';

const FormInput = ({placeholder, name, value, onChange}) => {
    return (
        <div className='form-input'>
            <input id={name} onChange={onChange} name={name} value={value} type='text'/>
            <label htmlFor={name} className={`form-input-label ${value ? 'active' : ''}`}>{placeholder}</label>
        </div>
    );
}

export default FormInput;