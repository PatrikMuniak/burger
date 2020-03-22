import React from 'react';
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) =>{
  const buildControlsItems = props.ingredients.map((ingredient, id)=>{
    return <BuildControl key={id} ingredient={ingredient} />
  })
   return (
  <div>
  {buildControlsItems}
  </div>
)}


export default buildControls;
