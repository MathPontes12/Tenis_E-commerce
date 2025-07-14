import { ReactNode } from "react";

export interface filterProps {
    children?: ReactNode;
    Cor?: string ;
    setCor?: React.Dispatch<React.SetStateAction<string>>;
    Categorias?: string[];
    setCategorias?: React.Dispatch<React.SetStateAction<string[]>>;
    Preco?: number
    setPreco?: React.Dispatch<React.SetStateAction<number>>;
}