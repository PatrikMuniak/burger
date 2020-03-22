import React from 'react';

const buildControl = (props) =>{
  <div>{props.ingredient} <button onClick={props.ingredientSubtract}>Less</button><button onClick={props.ingredientAdd}>More</button></div>
}
