import { saleProps } from "../saleType";


export interface ContextSaleProps {
  carrinho: saleProps[];
  setCarrinho: React.Dispatch<React.SetStateAction<saleProps[]>>;
  adicionarItem: (item: saleProps) => void;
}