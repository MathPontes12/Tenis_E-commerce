'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import dados from "@/json/carousel.json"
import Link from "next/link";


const InputSearch = () => {

    const [lista, setLista] = useState('')

    const listaProdutos = lista ? dados.productscard.filter((produto) => produto.nome.toLowerCase().includes(lista.toLocaleLowerCase())) : []
    return (

        <div className="flex flex-col xl:items-center items-start">
            <div className="relative flex items-center">
                <img src="/images/lupa.png" alt="icone de lupa" className="absolute ml-[5px] w-[30px] h-auto" />
                <input
                    value={lista}
                    onChange={(evento) => setLista(evento.target.value)}
                    type="text"
                    placeholder="Pesquisa"
                    className="text-[21px] text-[rgba(255,255,255)] border-b-[1px] border-white focus:outline-none
                    xl:w-[250px] w-[350px] pl-[43px] pr-[9px] py-[9px] bg-transparent"
                />
            </div>
            <ul
                className={`bg-black absolute flex-col xl:w-[250px] w-[350px] 
                    ${listaProdutos.length === 0 ? ' h-fit' : 'h-[420px]'} ${lista ? 'flex' : 'hidden'} 
                    overflow-y-auto mt-[50px] pt-[10px] text-white font-fontePrimaria z-20`}>

                {listaProdutos.length === 0

                    ? <p className="text-white font-fontePrimaria text-center py-[20px]">Produto não encontrado</p>

                    : listaProdutos.map((produto) =>
                        <Link href={`/loja/${produto.nome}`}  key={produto.id}>
                            <li
                                className="flex bg-black w-full border-b-[2px] border-white gap-[20px] 
                                px-[15px] pb-[15px] mt-[15px] cursor-pointer"
                                >
                                <img src={`/images/produtos/${produto.nome}.png`} alt="imagem do produto" className="w-[90px] h-auto bg-white"/>
                                <div className="flex flex-col justify-center gap-[10px] xl:text-[18px] text-[24px]">
                                    <h1>{produto.nome}</h1>
                                    <p>R$ {produto.preco}</p>
                                </div>
                            </li>
                        </Link>

                    )}
            </ul>
        </div>

    )
}

export default InputSearch