/* eslint-disable @next/next/no-img-element */

import Banner from "@/components/banner/Banner"
import Footer from "@/components/footer/Footer"
import Whatsapp from "@/components/whatsapp/Whatsapp"

const About = () => {



    return (

        <div className="w-full">
            <Banner className='bg-black' />

            <main className="bg-black h-full w-full flex flex-col items-center font-fontePrimaria 
            xl:py-[100px] py-[40px] xl:gap-[150px] gap-[50px]">
                <figure>
                    <img src="/images/logo.png" alt="imagem da logo" className="w-auto xl:h-[200px] h-[130px]"/>
                </figure>
                <article className="grid xl:grid-cols-2 grid-cols-1 gap-[50px]">
                    <p className="xl:text-[32px] text-[24px] xl:text-start text-center xl:m-[100px] m-[20px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec malesuada ac ligula a pharetra. Sed consectetur porttitor posuere. Nunc eu volutpat sapien. 
                        Suspendisse nec dui quis neque dignissim dapibus vel ac dolor. Duis sodales sit amet libero quis accumsan. 
                    </p>
                    <img src="/images/sobre/foto1.png" alt="imagem de divulgacao 1" className="w-full"/>
                </article>
            </main>

            <Whatsapp/>
            <Footer/>
        </div >

    )
}

export default About