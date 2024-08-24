import NavBar from "../nav/navbar.tsx";
import { useDispatch } from "react-redux";
import { decrement, increment,  } from "./cartSlice.ts";

function Cart() {
  const dispatch = useDispatch();
  return (
    <div>
      <NavBar></NavBar>
      <button onClick={() => dispatch(increment())}>Adicionar item</button>
      <button onClick={() => dispatch(decrement())}>Remover item</button>
    </div>
  );
}

export default Cart;
