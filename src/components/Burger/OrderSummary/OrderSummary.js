import React from 'react';
import './OrderSummary.css'
import Aux from '../../../hoc/Auxs'
import Backdrop from '../../Layout/components/Backdrop/Backdrop'

class OrderSummary extends React.Component {
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.showCheckout !== this.props.showCheckout){
      return true;
    }
    return false;
  }
  componentWillUpdate(){
    console.log('[OrderSummar] will update')
  }

render() {
  const ingredientsCheckout = Object.keys(this.props.ingredients).map(
    (ingredient)=>{return(<li>{ingredient} x {this.props.ingredients[ingredient]}: {this.props.prices[ingredient] * this.props.ingredients[ingredient]}</li>)});
  return (
    <Aux>
    {this.props.showCheckout ?
      (<Aux>
      <Backdrop show={this.props.showCheckout} clicked={this.props.showCheckoutHandler}/>
    <div className='OrderSummary'>
      <h3> This is your order: </h3>
      <ul>
      {ingredientsCheckout}
      <li id='total'>TOTAL: {this.props.total}</li>
      </ul>
    </div></Aux>)
     : null}
    </Aux>
  )
}};

export default OrderSummary;
