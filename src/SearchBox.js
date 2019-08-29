import React from 'react';

const SearchBox = ({searchfield,searchChange}) =>{
    return(
        <input 
            className='pa3 bg-lightest-blue ba b--green' 
            type='text' 
            placeholder='enter robots'
            onChange={searchChange}
        />
    )
}

export default SearchBox;