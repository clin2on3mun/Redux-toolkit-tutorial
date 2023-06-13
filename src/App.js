import { React , useEffect} from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/cartContainer";
import {useSelector,useDispatch} from 'react-redux'
import {calculateTotals} from './feature/cart/cartSlice';
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((store)=> store.cart)
  const { isOpen } = useSelector((store)=> store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal/>}
      
      <Navbar />
      <CartContainer/>
    </main>
  );
}

export default App;
