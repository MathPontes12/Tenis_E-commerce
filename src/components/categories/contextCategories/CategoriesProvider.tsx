'use client';

import { useState } from "react";
import ContextCategories from "./contextCategories";
import { filterProps } from "../filters/filterType";


const CategoriesProvider = ({ children }:filterProps) => {

    const [Cor, setCor] = useState('')
    const [Categorias, setCategorias] = useState<string[]>([])
    const [Preco, setPreco] = useState(500)

    return (

        <ContextCategories.Provider value={{Cor, setCor, Categorias, setCategorias, Preco, setPreco}}>
            {children}
        </ContextCategories.Provider>

    )
}

export default CategoriesProvider