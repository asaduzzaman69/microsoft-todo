import React from 'react'
import './custom.icons.styles.css'

const CustomIcon = ({fontClass,...otherProps}) => (
    <>
        <a className="btn-light" {...otherProps}>
            <i className={`${fontClass}`}></i>
        </a>
    </>
)

export default CustomIcon;