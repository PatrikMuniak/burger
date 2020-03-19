import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from './BurgerIngredients/BurgerIngredients.module.css'

const burger = () => {
    return (
      <div className={classes.Box}>
    <BurgerIngredient type='bread-top' />
    </div>
)}

export default burger;
