import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'

const Event:FC = (props) => {
    const location: any = useLocation();
    const { state } = location;
    console.log(state) //passed in info from the create page to display
    return (
        <div>

        </div>
    )
}

export interface IEventProps {

}

export default Event