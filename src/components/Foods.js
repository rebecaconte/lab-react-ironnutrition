import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import AddForm from './AddForm';
import FoodBox from './FoodBox'
import foods from '../foods.json';
import Search from './Search';


class Foods extends Component {

    state = {
        showForm: false
    }

    handleShowForm = () => {
        this.setState({   showForm: true })
    }

    render() {
        const {foods, onSearch} = this.props
        const {showForm} = this.state

        return (
            <div>
                <Search onSearch={onSearch}/>
                {
                    showForm ?
                    <AddForm newFood={this.handleSubmit} />:
                    <button className="control" onClick={this.handleShowForm}>Add Food</button>
                }       
            </div>
        )
    }
}




export default Foods;  