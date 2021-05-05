import React, { Component } from 'react'
import 'bulma/css/bulma.css';

class Search extends Component {
    render() {
        const {foods, onSearch} = this.props
        return (
            <div>
        
                <input class="input is-info" type="text" placeholder="Info input"></input>
            </div>
        )
    }
}

export default Search
