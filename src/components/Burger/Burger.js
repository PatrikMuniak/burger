import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from './BurgerIngredients/BurgerIngredients.module.css'

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
  .map(igKey => {return [...Array(props.ingredients[igKey])].map((_, i)=> {return <BurgerIngredient key={igKey+i} type={igKey} /> })
})
    return (
      <div className={classes.Box}>
  {transformedIngredients}
    </div>
)}

export default burger;
