import React from 'react';

const SearchBox = ({searchfield,searchChange}) =>{
    return(
        <input 
            className='pa3 bg-lightest-yellow ba b--yellow' 
            type='text' 
            placeholder='search warrior'
            onChange={searchChange}
        />
    )
}

export default SearchBox;