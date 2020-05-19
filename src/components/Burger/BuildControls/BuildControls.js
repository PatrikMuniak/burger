import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';


const buildControls = (props) =>{
const controls = [
  {label: 'Salad', type:'salad'},
  {label: 'Bacon', type:'bacon'},
  {label: 'Cheese', type:'cheese'},
  {label: 'Meat', type:'meat'}
]

  const buildControlsItems = controls.map((controls, id)=>{
    return <BuildControl key={id} label={controls.label} type={controls.type} add={props.add} subtract={props.subtract} priceUp={props.priceUp} priceDown={props.priceDown}/>
  })
   return (
  <div className='BuildControls'>
  <div className='Container'>
  <div>{buildControlsItems}</div>
  <button onClick={props.clicked}>Checkout</button>
  </div>
  </div>
)}


export default buildControls;
