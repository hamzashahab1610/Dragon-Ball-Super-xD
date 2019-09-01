import React, {Component} from 'react';
import CardList from './cardList';
import SearchBox from './SearchBox';
import {warriors} from './warriors.js';
import Logo from './1.png'

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchfield: '',
            warriors: warriors
        }
    }

    onSearchChange = (event) => {  
        this.setState({searchfield: event.target.value});        
        
    }

    render(){
        const filter = this.state.warriors.filter(warriors => {
            return warriors.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <div className='center grow'>
                    <img src={Logo} className='h-100 w-50' alt=''/>
                </div> 
                <div><SearchBox searchChange={this.onSearchChange}/></div>               
                <div><br></br><CardList warriors={filter}/></div>
                
            </div>        
        )
    }
    
}

export default App;