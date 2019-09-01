import React from 'react';
import Card from './card';

const CardList = ({warriors}) => {
    const cardComponent = warriors.map((user,i)=>{
        return (<Card 
            key={i} 
            id={warriors[i].id} 
            name={warriors[i].name}
            img={warriors[i].img}    
            /> );
        })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList