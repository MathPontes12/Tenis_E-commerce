'use client';

import { useEffect, useState } from "react"
import ButtonCarousel from "../buttons/ButtonCarousel";
import CardCarousel from "../cards/CardCarousel";


const CarouselHome = () => {

    const [imageAtual, setImagemAtual] = useState(0)


    useEffect(() => {
        const intervalo = setInterval(() => {
            setImagemAtual(contador => (contador + 1) % 4)
        }, 5000);
        return () => clearInterval(intervalo)

    }, [])

    return (

        <article className="relative h-screen">
            <div className="carousel h-full w-full xl:text-start text-center">
                {imageAtual === 0 ?

                    <CardCarousel
                        className="carousel-item bg-[url('/images/carrossel/fundo1.png')]"
                        classNameImage="w-auto xl:h-[700px] h-[320px] xl:mt-[200px] xl:ml-[300px] xl:mb-0 mb-[90px]"
                        nomeTenis="Tenis Mola Social"
                    />

                    : imageAtual === 1 ?

                        <CardCarousel
                            className="carousel-item bg-[url('/images/carrossel/fundo2.png')]"
                            classNameImage="w-auto xl:h-[700px] h-[300px] xl:ml-[300px] xl:mt-[60px] xl:mb-0 mb-[120px]"
                            nomeTenis="Tenis Mola Fit"
                        />

                        : imageAtual === 2 ?

                            <CardCarousel
                                className="carousel-item bg-[url('/images/carrossel/fundo3.png')]"
                                classNameImage="w-auto xl:h-[500px] h-[220px] xl:ml-[200px] xl:mt-[300px] xl:mb-0 mb-[90px]"
                                nomeTenis="Tenis Social"
                            />

                            : imageAtual === 3 ?

                                <CardCarousel
                                    className="carousel-item bg-[url('/images/carrossel/fundo4.png')] bg-bottom"
                                    classNameImage="w-auto xl:h-[650px] h-[380px] xl:ml-[200px] xl:mt-[400px] xl:mb-0 mb-[50px]"
                                    nomeTenis="Chuteira"
                                />

                                : 'Imagem Não Encontrada'
                }

            </div>
            <div className="flex w-full mt-[-50px] justify-center gap-[30px] py-2 absolute">
                <ButtonCarousel state={() => setImagemAtual(0)} className={`${imageAtual === 0 ? 'fill-white' : 'fill-none'}`} />
                <ButtonCarousel state={() => setImagemAtual(1)} className={`${imageAtual === 1 ? 'fill-white' : 'fill-none'}`} />
                <ButtonCarousel state={() => setImagemAtual(2)} className={`${imageAtual === 2 ? 'fill-white' : 'fill-none'}`} />
                <ButtonCarousel state={() => setImagemAtual(3)} className={`${imageAtual === 3 ? 'fill-white' : 'fill-none'}`} />
            </div>
        </article>

    )
}

export default CarouselHome