import React, {Component} from 'react';
import CardList from '../component/cardList';
import SearchBox from '../component/SearchBox';
import {warriors} from '../component/warriors.js';
import Logo from '../1.png';
import Scroll from '../component/scroll';
import ErrorBoundry from '../component/ErrorBoundry';

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
                {/* <Scroll> */}
                    {/* <ErrorBoundry> */}
                        <div><br></br><CardList warriors={filter}/></div>
                    {/* </ErrorBoundry>                     */}
                {/* </Scroll>           */}
            </div>        
        )
    }
    
}

export default App;