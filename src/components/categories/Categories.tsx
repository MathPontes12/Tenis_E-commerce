'use client';

import { useContext } from "react"
import SmallCard from "../cards/SmallCard"
import dados from "@/json/carousel.json"
import ContextCategories from "./contextCategories/contextCategories"
import Link from "next/link";
import Filters from "./Filters";
import { useMediaQuery } from "react-responsive";


const StorePage = () => {

    const isDesktop = useMediaQuery({ minWidth: 1280 })

    const contexto = useContext(ContextCategories)

    const CorFiltrada = contexto?.Cor
    const CategoriaFiltrada = contexto?.Categorias
    const PrecoFiltrado = contexto?.Preco

    const temFiltroCor = CorFiltrada !== "";
    const temFiltroCategoria = CategoriaFiltrada!.length > 0;
    const temFiltroPreco = PrecoFiltrado !== 500;

    let ListaFiltrada = dados.productscard

    // Se algum filtro estiver ativo, aplica os dois ao mesmo tempo
    if (temFiltroCor || temFiltroCategoria || temFiltroPreco) {
        ListaFiltrada = dados.productscard.filter((produto) => {
            //se o filtro esta ativo faz a filtragem, se nao, retorna mesmo sem ele (nao exclui a lista, permitindo o uso de um filtro ou dois)
            const correspondeCor = temFiltroCor ? produto.cor === CorFiltrada : true;
            const correspondeCategoria = temFiltroCategoria ? CategoriaFiltrada?.includes(produto.categorias) : true;
            const correspondePreco = temFiltroPreco ? produto.preco <= PrecoFiltrado! : true;
            return correspondeCor && correspondeCategoria && correspondePreco;
        });
    }


    return (
        <div className="flex xl:flex-row flex-col w-full">
            {isDesktop ? (
                <aside className="bg-black w-[280px] flex flex-col pt-[50px] gap-[30px] px-[40px]">
                    <Filters />
                </aside>
            ) : (
                <aside className="drawer w-full justify-end">
                    {/* drawer com navbar do daisy */}
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-4" className="text-[24px] text-black pr-[20px] pt-[10px] flex gap-[5px]">
                            <p>FILTRO</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-auto h-[30px] stroke-current"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="drawer-side h-full">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-black h-full w-[320px] px-[20px] py-[20px] gap-[40px]">
                            <label
                                htmlFor="my-drawer-4"
                                className="text-[40px] font-fontePrimaria font-bold cursor-pointer text-white place-self-end"
                            >
                                ×
                            </label>
                            <Filters />
                        </ul>
                    </div>
                </aside>
            )}

            <article className="grid xl:grid-cols-4 grid-cols-2 xl:py-[80px] py-[40px] xl:px-[40px] px-[40px] xl:gap-[50px] gap-[20px]
            w-full h-full overflow-auto">
                {ListaFiltrada.length === 0 ? (
                    <p className="text-black text-[28px] col-span-4 text-center w-full">
                        Nenhum produto encontrado com os filtros selecionados.
                    </p>
                ) : (
                    ListaFiltrada.map((categoria) => (
                        <Link href={`/loja/${categoria.nome}`} key={categoria.id}>
                            <SmallCard nomeTenis={categoria.nome} preco={categoria.preco} />
                        </Link>
                    ))
                )}
            </article>
        </div>

    )
}

export default StorePage