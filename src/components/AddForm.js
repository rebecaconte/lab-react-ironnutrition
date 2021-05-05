import React, { Component } from 'react'
import 'bulma/css/bulma.css';


//ITERATION 3
class AddForm extends Component {

    state = {
        showForm: false
    }

    handleShowForm = () => {
        this.setState({ showForm: !this.state.showForm})
    }

    render() {

        const { newFood } = this.props

        const { showForm } = this.state


        return (
            <div>
                <button onClick={this.handleShowForm} variant="contained" color="primary">Add Food</button>
                   
            <div style={ showForm ? {display: "block" } : {display: "none"} }>

                <form onSubmit={newFood} className="control">
                    <input className="input" type="text" placeholder="Food Name" />
                    <input className="input" type="text" placeholder="Amount of Calories" />

                    <div className="file is-normal has-name">
                        <label className="file-label">
                            <input className="file-input" type="file" name="resume" />
                            <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">
                                    Upload picture
                                </span>
                            </span>
                            <span className="file-name">
                                <i>foodImage.png</i>
                            </span>
                        </label>
                        <button type="submit" className="button is-primary">Submit</button>
                    </div>
                </form>
            </div>
            </div>     
        )
    }
}


export default AddForm;