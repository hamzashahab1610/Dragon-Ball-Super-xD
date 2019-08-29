import React, {Component} from 'react';
import CardList from './cardList';
import SearchBox from './SearchBox';
import {robots} from './5.1 robots.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchfield: '',
            robots: robots
        }
    }

    onSearchChange = (event) => {  
        this.setState({searchfield: event.target.value});        
        
    }

    render(){
        const filteredrobos = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredrobos}/>
            </div>        
        )
    }
    
}

export default App;