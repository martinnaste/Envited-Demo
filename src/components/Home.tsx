import React, { FC } from 'react'
import Button from './Button'
import Card from './Card'
import './Home.css'

const Home:FC = () => {
    return (
        <div className='Home'>
            <div className='Header-container'>
                <h1 className='Header-title'>
                    Imagine if <p className='Snapchat'>Snapchat</p> had events.
                </h1>
                <p className='Subheading'>Easily host and share events with your friends across any social media</p>
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Button path={"/create"} text="🎉 Create my event"/>
            </div>
        </div>
    )
}

export default Home