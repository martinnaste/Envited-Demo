import React, { FC } from 'react'
import './Card.css'

const Card:FC<ICardProps> = (props) => {
    return (
        <div className='Card'>
            <img className='Image' src={require('../assets/image.png')} alt=''></img>

            {/* This was made thinking i had to recreate the event image on the landing page */}
            {/* <div >
                <img className='Image' src={require('../assets/image1.jpeg')} alt='party'></img>
            </div>
            <div className='Info'>
                <div className='Card-Info'>
                    <h3 className='Card-Title'>Movie Night</h3>
                    <span className='Card-hosted-by'>👋 Host by&nbsp;<p style={{fontWeight: "bold"}}>Elysia</p></span>
                </div>
                <div className='Card-Responses'>
                    <span className='Card-span'>
                        <p style={{fontWeight: "bold", color: "#240D57"}}>14&nbsp;</p>
                        <p style={{color: "#240D57"}}>responses ·</p>
                        <p style={{color: "#501FC1"}}>see guests</p>
                    </span>
                    <div className='Card-Invite'>
                        <p className='Invite'>🤝 Invite</p>
                    </div>
                </div>
                <div className='Card-Lnks'>
                    <div className='Card-Link'>
                        <div className='Icon'>
                            <img></img>
                        </div>
                        <div>
                            <p>18 August 6:00PM</p>
                            <p>to 19 August 1:0PM UTC +10</p>
                        </div>
                        <div>
                            <p>{'>'}</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export interface ICardProps {
    // Card props
    //Title, date, time, location etc
}

export default Card