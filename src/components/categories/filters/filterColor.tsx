'use client';

import { useContext, useEffect, useState } from "react";
import ContextCategories from "../contextCategories/contextCategories";

const FilterColor = () => {

    const contexto = useContext(ContextCategories)

    const [CorEscolhida, setCorEscolhida] = useState('')

    useEffect(()=> {
        //se contexto e contexto.setCor existirem (confirmação para evitar undefined)
        if (contexto && contexto.setCor) {
        contexto.setCor(CorEscolhida);
    }
    }, [CorEscolhida, contexto])

    return (

        <>
            <h1 className="text-[#f5f5f5] text-[28px]">Cor</h1>
            <ul className="text-[24px] flex flex-wrap">
                <li className="flex gap-[10px] text-black">
                    <select className="bg-white w-[180px]" value={CorEscolhida} onChange={evento => setCorEscolhida(evento.target.value)}>
                        <option value="">Selecione a cor</option>
                        <option value="Estampado">Estampado</option>
                        <option value="Verde">Verde</option>
                        <option value="Azul">Azul</option>
                        <option value="Vermelho">Vermelho</option>
                    </select>
                </li>
            </ul>
        </>

    )
}


export default FilterColor