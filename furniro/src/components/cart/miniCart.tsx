import { useSelector } from "react-redux";
import { RootState } from "./store";

export const MiniCart = () => {
  const { quantityItens, teste } = useSelector((state: RootState) => state.cart);

  return <div>tem {quantityItens} {teste} no carrinho</div>;
};
