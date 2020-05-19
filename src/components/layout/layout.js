import  React, {useState} from 'react';
import Aux from '../../hoc/Auxs';
import './Layout.css'
import Backdrop from './components/Backdrop/Backdrop'

const Layout = (props) => {
 const [show, setShow] = useState(false)
 const showSidedrawer = () =>{
   const newShow = !show
   setShow(newShow)
  }
  const toolbar = (<div className='Toolbar'>
                        <button className='Menu' onClick={showSidedrawer}><img src="https://img.icons8.com/android/24/ffffff/menu.png"/></button>
                        <div>LOGO</div>
                        <div className='MenuMin'><ul>
                          <li>Burger Builder</li>
                          <li>Order Checkout</li>
                        </ul>
                        </div>
                      </div>)
  const sidedrawer = (<div className='Sidedrawer'>
                        <ul>
                          <li>Burger Builder</li>
                          <li>Order Checkout</li>
                        </ul>
                      </div>)
  return (
    <Aux>

        <div>
        {toolbar}
        {show && sidedrawer}
        <Backdrop
          show={show}
          clicked={showSidedrawer}
         />
        </div>
        <main>
        {props.children}
        </main>
    </Aux>
  )
}

export default Layout;
