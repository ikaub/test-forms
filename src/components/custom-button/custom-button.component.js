import React from "react";
import './custom-button.styles.scss';

const CustomButton = ({children, onClick}) => {
    return (
        <div onClick={onClick} className='button'>
            {children}
        </div>
    );
}

export default CustomButton;
