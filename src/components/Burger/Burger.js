import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from './BurgerIngredients/BurgerIngredients.module.css'
import Aux from '../../hoc/Auxs.js'
import OrderSummary from './OrderSummary/OrderSummary'

class Burger extends React.Component {
  componentWillUpdate(){
    console.log('[Burger] re-rendered')
  }

  render(){const transformedIngredients = Object.keys(this.props.ingredients)
  .map(igKey => {return [...Array(this.props.ingredients[igKey])].map((_, i)=> {return <BurgerIngredient key={igKey+i} type={igKey} /> })
})
    return (
      <Aux>
      <OrderSummary
      ingredients={this.props.ingredients}
      prices={this.props.prices}
      total={this.props.price}
      showCheckout={this.props.showCheckout}
      showCheckoutHandler={this.props.showCheckoutHandler}
      />
      <div className={classes.Box}>
  {transformedIngredients}
    </div>
    <div>
    Price: {this.props.price}
    </div>

    </Aux>
)}};

export default Burger;
