import React from 'react'
import { CartIcon } from '../cartIcon';
import { useSelector } from 'react-redux';

const Navbar = ()=>{
  const {amount}= useSelector((store)=>store.cart);
    return(
        <div>
            <nav>
      <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
        </div>
    )
}
export default Navbar;