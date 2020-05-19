import React from 'react';
import './BuildControl.css';

const buildControl = (props) =>{ return (
  <div className='BuildControl'><div className='Label'>{props.label}</div>
  <button className='Less' onClick={()=>{props.subtract(props.type); return props.priceDown(props.type);}}>Less</button>
  <button className='More' onClick={()=>{props.add(props.type); return props.priceUp(props.type);}}>More</button>
  </div>
)};

export default buildControl;
