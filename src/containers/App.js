import React, {Component} from 'react';
import Layout from '../components/layout/layout'
import Burger from '../components/burger_builder/burger/Burger';
import IngrediensPicker from '../components/burger_builder/ingredients_picker/IngredientsPicker';
import './App.css'

class App extends Component {
  state = {
      ingredients:{
        'bread-top':1,
        'salad':1,
        'bacon':1,
        'cheese':1,
        'meat':1,
        'bread-bottom':1,
      },
    };


  addMeatHandler = () => {
    var ingredients = [...this.state.ingredients]
    ingredients.splice(1, 0, 'meat')
    return this.setState({ingredients: ingredients})
  };

   render() {
    return (<div className="App" >
        <Layout>
          <Burger ingredients={this.state.ingredients}/>
          <IngrediensPicker />
        </Layout>
    </div>)

}};

export default App;
