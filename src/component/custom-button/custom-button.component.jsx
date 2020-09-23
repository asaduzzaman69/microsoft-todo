import React from 'react'
import './custom-button.styles.css'

const CustomButton = ({children,...otherProps}) => {
    return (
        <div className="container-contact100-form-btn" {...otherProps}>
        <div className="wrap-contact100-form-btn">
            <div className="contact100-form-bgbtn"></div>
            <button className="contact100-form-btn">
                <span>
                   {children}
                    <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                </span>
            </button>
        </div>
    </div>
    )
}

export default CustomButton;