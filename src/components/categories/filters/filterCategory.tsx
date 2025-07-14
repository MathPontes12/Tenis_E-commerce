'use client';

import { useContext, useEffect, useState } from "react";
import ContextCategories from "../contextCategories/contextCategories";


const FilterCategory = () => {

    const listaDeCategorias = [
        'Social', 'Esporte', 'Corrida'
    ]


    const contexto = useContext(ContextCategories)

    const [categoria, setCategoria] = useState<string[]>([])


    const mudancaValor = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const nome = evento.target.value
        const valor = evento.target.checked
        if (valor) {
            // Se marcou, adiciona no array
            setCategoria((prev) => [...prev, nome]);
        } else {
            // Se desmarcou, remove do array
            setCategoria((prev) => prev.filter((item) => item !== nome));
        }
    }

    useEffect(()=> {
        // se contexto e contexto.setCategorias existir
        if (contexto && contexto.setCategorias) {
            contexto.setCategorias(categoria)
        }

    }, [contexto, categoria])

    

    return (

        <>
            <h1 className="text-[#f5f5f5] text-[28px]">Categoria</h1>
            <ul className="text-[24px] xl:gap-[20px] flex flex-wrap">
                {listaDeCategorias.map(categoria => (
                    <li className="flex gap-[10px]" key={categoria}>
                        <input type="checkbox" value={categoria} onChange={mudancaValor} />
                        <p> {categoria} </p>
                    </li>
                ))}
            </ul>
        </>

    )
}


export default FilterCategory