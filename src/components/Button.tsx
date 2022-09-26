import React, { FC } from 'react'
import { NavigateOptions, useNavigate } from 'react-router-dom'
import "./Button.css"

const Button:FC<IButtonProps> = (props) => {
    const navigate = useNavigate();

    var navigateOptions : NavigateOptions = {};
    if(props.eventInfo) {
        navigateOptions.state = props.eventInfo
    }

    return (
        <div className='Button' onClick={() => {navigate(props.path, navigateOptions)}}>
            <h3>{props.text}</h3>
        </div>
    )
}

export interface IButtonProps {
    path: string;
    text: string;
    eventInfo?: any;
}

export default Button