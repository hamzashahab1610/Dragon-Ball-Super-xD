import React from 'react';
import Card from './card';

const CardList = ({warriors}) => {
    // if(true)
    //     throw new Error('ERROR!!');    
        
    return (
        <div>
            {warriors.map((user,i)=>{
                return(
                    <Card 
                    key={i} 
                    id={warriors[i].id} 
                    name={warriors[i].name}
                    img={warriors[i].img}  
                    />
                );
                })
            }               
        </div>
    );    
}

export default CardList;