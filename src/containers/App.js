import React, {Component} from 'react';
import Layout from '../components/Layout/Layout';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
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
     const ingredients = Object.keys(this.state.ingredients).slice(1,-1)
    return (<div className="App" >
        <Layout>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls ingredients={ingredients}/>
        </Layout>
    </div>)

}};

export default App;
