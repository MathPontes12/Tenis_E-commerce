'use client';

import { useContext, useEffect, useState, } from "react";
import ContextCategories from "../contextCategories/contextCategories";

const FilterPrice = () => {

    const contexto = useContext(ContextCategories)
    
    const [precoRange, setPrecoRange] = useState(500)

    const mudancaValor = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const valor = Number(evento.target.value)
        setPrecoRange(valor)
    }

    useEffect(()=> {
            // se contexto e contexto.setCategorias existir
            if (contexto && contexto.setPreco) {
                contexto.setPreco(precoRange)
            }
    
        }, [contexto, precoRange])

    console.log()

    return (

        <>
            <h1 className="text-[#f5f5f5] text-[28px]">Preço</h1>
             <div className="flex xl:gap-[150px] gap-[250px] mb-[-30px]">
                <p>Min</p>
                <p>Max</p>
            </div>
            <input type="range" min='200' max='500' defaultValue={precoRange}
            onChange={mudancaValor}
            />
            <div className="flex xl:gap-[150px] gap-[250px] mt-[-30px]">
                <p>100</p>
                <p>{precoRange}</p>
            </div>
        </>

    )
}


export default FilterPrice