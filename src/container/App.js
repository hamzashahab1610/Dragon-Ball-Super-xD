import React, {Component} from 'react';
import CardList from '../component/cardList';
import SearchBox from '../component/SearchBox';
import {warriors} from '../component/warriors.js';
import Logo from '../1.png';
import Scroll from '../component/scroll';
import ErrorBoundry from '../component/ErrorBoundry';
import { connect } from 'react-redux';

import { setSearchField } from '../actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }    
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            //searchfield: '',
            warriors: warriors
        }
    }

    // onSearchChange = (event) => {  
    //     this.setState({searchfield: event.target.value});        
        
    // }

    render() {
        //console.log(this.props.store.getState())
        const { searchField, onSearchChange } = this.props;
        const { warriors } = this.state;
        const filter = this.state.warriors.filter(warriors => {
            return warriors.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return(
            <div className='tc'>
                <div className='center grow'>
                    <img src={Logo} className='h-100 w-50' alt=''/>
                </div> 
                <div><SearchBox searchChange={onSearchChange}/></div> 
                {/* <Scroll> */}
                    {/* <ErrorBoundry> */}
                        <div><br></br><CardList warriors={filter}/></div>
                    {/* </ErrorBoundry>                     */}
                {/* </Scroll>           */}
            </div>        
        )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 