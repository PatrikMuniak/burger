import  React from 'react';

import Aux from '../../hoc/Auxs';


const layout = (props) => {
  return (
    <Aux>
        <div> Tolbar, Sidedrawer, Backdrop</div>
        <main>
        {props.children}
        </main>
    </Aux>
  )
}
