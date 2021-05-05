import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox'
import AddForm from './components/AddForm'
import Foods from './components/Foods'
import Search from './components/Search';
import data from './foods.json'


class App extends Component {

  state = {
    foods: data,
    filteredFoods: data
  }

  //ITERATION 4
  handleSearch = (e) => {
    let input  = e.target.value 

    const {foods} = this.state
    let filteredFoods = foods.filter((singleFood) => {
      return singleFood.name.toLowerCase().includes(input.toLowerCase())
    })

    this.setState({
      filteredFoods: filteredFoods
    })
  }

  //ITERATION 3
  handleSubmit = (e) => {
    e.preventDefault()

    const { name, calories, image } = e.target
    let newFood = {
      name: name.value,
      calories: calories.value,
      image: image.value
    }
    console.log(newFood)
    this.setState({ showForm: false }, () => {

      this.props.onAdd(newFood)
    })

  }

  handleAddBook = ( food ) => {
    // adds a single book to the books state
    this.setState({
      foods: [food, ...this.state.foods]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <AddForm />
       
        <Search />

        {
          foods.map((food, index) => {
            return <FoodBox
              food={food}
              key={index}
            />
          })
        }
      </div>
    );

  }
}

export default App;
