import React, { FC, useState } from 'react'
import Button from './Button'
import './Create.css'

const Create:FC<ICreateProps> = (props) => {
    const [eventName, setEventName] = useState('')
    const [hostName, setHostName] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [location, setLocation] = useState('')
    const [eventPhoto, setEventPhoto] = useState('')

    return (
        <div className='Create-Page'>
            <div className='Inputs'>
                <input
                    type='text' className='input' placeholder='Event Name' onChange={(e) => {setEventName(e.target.value)}}
                />
                <input
                    type='text' className='input' placeholder='Host Name' onChange={(e) => {setHostName(e.target.value)}}
                />
                <input
                    type='text' className='input' placeholder='Start Time' onChange={(e) => {setStartTime(e.target.value)}}
                />
                <input
                    type='text' className='input' placeholder='End Time' onChange={(e) => {setEndTime(e.target.value)}}
                />
                <input
                    type='text' className='input' placeholder='Location' onChange={(e) => {setLocation(e.target.value)}}
                />
                <input
                    type='file' className='input' placeholder='Event Photo' onChange={(e) => {setEventPhoto(e.target.value)}}
                />
            </div>
            <div>
                <Button path='/event' text="Next" eventInfo={{eventName, hostName, startTime, endTime, location, eventPhoto}}/>
            </div>
        </div>
    )
}

export interface ICreateProps {

}

export default Create