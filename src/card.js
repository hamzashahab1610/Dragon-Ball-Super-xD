import React from 'react';
import { robots } from './5.1 robots.js';

const Card = ({name,email,id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;