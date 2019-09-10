import React from 'react';

const Card = ({name,img,url}) => {
    
    return (
        <a href={url}>
            <div id="bcolor" className='tc bg-light-orange dib br3 pa3 ma2 grow bw3 shadow-5 ba bw1'>
            <img alt='warriors' src={img}/>
                <h2>{name}</h2>
            </div>
        </a>        
    )
}

export default Card;