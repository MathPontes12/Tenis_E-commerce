/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { CardsProps } from "./cardsType"


const CardCarousel = ({ className, classNameImage, nomeTenis }: CardsProps) => {
    return (

        <article className={`${className} bg-cover bg-center w-full flex justify-center xl:items-center items-end overflow-hidden`}>

            <section className="flex flex-col absolute xl:left-[200px] xl:bottom-auto top-[300px] font-fontePrimaria gap-[20px]">
                <h1 className="xl:text-[90px] text-[40px] text-shadow-black text-shadow-md">{nomeTenis}</h1>
                <Link href='/loja/'>
                    <button
                        className="bg-white text-black w-fit py-[5px] px-[55px] xl:text-[30px] text-[36px] rounded-[10px] cursor-pointer active:scale-98 hover:opacity-80">
                        Compre Agora
                    </button>
                </Link>
            </section>
            <img src={`/images/carrossel/${nomeTenis}.png`} alt="foto do tenis" className={`${classNameImage}`} />

        </article>

    )
}

export default CardCarousel