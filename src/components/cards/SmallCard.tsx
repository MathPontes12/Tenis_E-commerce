/* eslint-disable @next/next/no-img-element */

import { CardsProps } from "./cardsType"


const SmallCard = ({ nomeTenis, preco }:CardsProps ) => {

    return (

        <div className="card w-fit h-fit text-black font-fontePrimaria rounded shadow-2xl">
            <figure className="xl:w-[250px] w-[150px]">
                <img
                    src={`/images/produtos/${nomeTenis}.png`}
                    alt="imagem do produto"
                    className="w-auto h-[150px] cursor-pointer transition duration-500 ease-in-out hover:scale-120 hover:opacity-80"    
                />
            </figure>
            <div className="card-body gap-[10px] flex flex-col">
                <h2 className="card-title text-[21px]">
                    {nomeTenis}
                </h2>
                <p className="text-[24px]">R$ {preco}</p>
            </div>
        </div>

    )
}

export default SmallCard