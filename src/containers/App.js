import React, {Component} from 'react';
import Layout from '../components/Layout/Layout';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import './App.css'

class App extends Component {
  state = {
      ingredients:{
        'bread-top':1,
        'salad':0,
        'bacon':0,
        'cheese':0,
        'meat':0,
        'bread-bottom':1,
      },
      price:{
        'bread-top':2,
        'salad':0.40,
        'bacon':0.90,
        'cheese':0.60,
        'meat':2,
        'bread-bottom':2,

      },
      totalCost:4,
      showCheckout: false,
    };
priceHandlerUp = (ingredient) => {
  const ingredients = {...this.state.ingredients};
  var prices = {...this.state.price};
  var totalCost = this.state.totalCost;
  const itemCost = prices[ingredient]
  totalCost =  totalCost + itemCost
  this.setState({totalCost:totalCost})
};
priceHandlerDown = (ingredient) => {
  const ingredients = {...this.state.ingredients};
  var prices = {...this.state.price};
  var totalCost = this.state.totalCost;
  const itemCost = prices[ingredient]
  if (ingredients[ingredient]>0){
  totalCost =  totalCost - itemCost
  this.setState({totalCost:totalCost})}
};

ingredientAdd = (ing) => {
  const quantity = this.state.ingredients[ing]+1;
  var ingredients = {...this.state.ingredients};
  ingredients[ing]=quantity
  this.setState({ingredients:ingredients})
};
ingredientSubtract = (ing) => {
  var quantity = this.state.ingredients[ing];
  if (quantity>0){quantity = quantity -1
  var ingredients = {...this.state.ingredients};
  ingredients[ing]=quantity
  this.setState({ingredients:ingredients})}
};

showCheckoutHandler = () => {
  this.setState({showCheckout: !this.state.showCheckout})
  console.log(this.state.showCheckout)

}

   render() {
    return (<div className="App" >
        <Layout>
          <Burger
          ingredients={this.state.ingredients}
          price={this.state.totalCost}
          prices={this.state.price}
          showCheckout={this.state.showCheckout}
          showCheckoutHandler={this.showCheckoutHandler}
          />
          <BuildControls
          add={this.ingredientAdd}
          subtract={this.ingredientSubtract}
          priceUp={this.priceHandlerUp}
          priceDown={this.priceHandlerDown}
          clicked={this.showCheckoutHandler}
           />
        </Layout>
    </div>)

}};

export default App;
