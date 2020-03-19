import React from 'react';
import classes from './BurgerIngredients.module.css'

const burgerIngredient = (props) => {
  let ingredient = null
  switch (props.type){
      case ('bread-top'):
          ingredient =(<div className={classes.BreadTop}>
                        <div className={classes.SesamSeeds1}></div>
                        <div className={classes.SesamSeeds2}></div>
                      </div>);
          break;
      case ('salad:'):
          ingredient =<div className={classes.Salad}></div>;
          break;
      case ('bacon:'):
          ingredient =<div className={classes.Bacon}></div>;
          break;
      case ('cheese'):
          ingredient =<div className={classes.Cheese}></div>;
          break;
      case ('burger'):
          ingredient =<div className={classes.Burger}></div>;
          break;
      case ('bread-bottom'):
          ingredient =<div className={classes.BreadBottom}></div>;
          break;
      default:
          ingredient = <h1> the ingredient does not exist</h1>
  };
  return ingredient
}

export default burgerIngredient;
