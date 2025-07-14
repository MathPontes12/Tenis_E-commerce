'use client';
/* eslint-disable @next/next/no-img-element */

import { useContext } from "react"
import ContextSale from "../sale/contextSale/contextSale"
import SaleButton from "../buttons/SaleButton";
import { saleProps } from "../sale/saleType";
import { Trash2 } from "lucide-react";
import { CartProps } from "./CartType";


const Cart = ({ id }:CartProps) => {

    const contexto = useContext(ContextSale)

    const aoClicarLimpar = (produto: saleProps) => {
        contexto?.setCarrinho(
            contexto.carrinho.filter((novaLista) => novaLista.nome !== produto.nome)   
        )
    }

    const MudarQuantidade = (nome:string, evento: saleProps) =>{
        const novaQuantidade = evento.target!.value

        contexto?.setCarrinho(contexto.carrinho.map((produto) =>
            produto.nome === nome ? {...produto, quantidade: novaQuantidade} : produto
        ),
    )
    }



    return (

        <div className="drawer drawer-end w-fit xl:pr-[50px] z-50">
            <input id={`${id}`} type="checkbox" className="drawer-toggle" />
            <figure className="drawer-content">
                <label htmlFor={`${id}`} className="drawer-button cursor-pointer hover:opacity-50">
                    <div className="flex">
                        <img src="/images/sacola.png" alt="icone carrinho de compras" className="w-[40px] h-auto"/>
                        <div className={`bg-red-500 text-[12px] text-center 
                        w-[17px] h-[17px] text-white rounded-full ml-[-15px]
                            ${contexto?.carrinho.length === 0 ? 'hidden' : 'static'}`}>
                            {contexto?.carrinho.length}
                        </div>
                    </div>
                </label>
            </figure>
            <div className="drawer-side">
                <label htmlFor={`${id}`} className="drawer-overlay"></label>

                <article className="bg-black h-full w-[380px] flex flex-col gap-[30px] text-white p-4">
                    <div className="flex gap-[100px] items-center">
                        <label
                            htmlFor={`${id}`}
                            className="xl:text-[40px] text-[40px] font-fontePrimaria font-bold cursor-pointer"
                        >
                            ×
                        </label>
                        <h1 className="flex font-fontePrimaria font-bold xl:text-[28px] text-[24px]">
                            MEU CARRINHO
                        </h1>
                    </div>
                    <ul className="flex flex-col items-center h-[570px] overflow-auto">
                        
                        {contexto?.carrinho.length === 0 ? 
                        (<h1 className="my-auto text-[16px] font-fontePrimaria">
                            SEU CARRINHO ESTÁ VAZIO!
                        </h1>) 
                        : 
                        (contexto?.carrinho?.map((produto) =>
                            <li
                                key={produto.nome}
                                className="flex justify-evenly w-full border-y-[1px] border-white py-[7px]">
                                <img src={`/images/produtos/${produto.nome}.png`} alt="imagem do produto" className="w-auto h-[100px] bg-white"/>
                                <article className="flex flex-col gap-[5px] font-fontePrimaria">
                                    <h2 className="text-[20px]">{produto.nome}</h2>
                                    <div>
                                        <p>R$ {produto.preco}</p>
                                    </div>
                                    <div className="flex text-[14px] gap-[5px] opacity-70">
                                        <p>Tamanho:</p>
                                        <p>{produto.tamanhoSelecionado}</p>
                                    </div>
                                    <div className="flex text-[14px] gap-[5px] opacity-70">
                                        <p>Quantidade:</p>
                                        <select 
                                        className="text-white w-[40px]"
                                        defaultValue={produto.quantidade} onChange={(evento) => MudarQuantidade(produto.nome!, evento)}>
                                            <option className="text-black" value='1'>1</option>
                                            <option className="text-black" value='2'>2</option>
                                            <option className="text-black" value='3'>3</option>
                                            <option className="text-black" value='4'>4</option>
                                            <option className="text-black" value='5'>5</option>
                                        </select>
                                    </div>
                                </article>
                                <button onClick={() => aoClicarLimpar(produto)} className="text-black flex justify-start">
                                    <Trash2 className="w-[40px] cursor-pointer fill-white"/>
                                </button>
                            </li>
                        ))}

                    </ul>
                    <SaleButton className={`${contexto?.carrinho.length === 0 ? 'hidden' : 'static'}`}/>
                </article>
            </div>
        </div>

    )
}

export default Cart