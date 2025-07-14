/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Cart from "../cart/Cart"
import StoreMenu from "../storeMenu/StoreMenu"
import { BannerProps } from "./BannerType"
import InputSearch from "../input/InputSearch"


const Banner = ({ className }: BannerProps) => {
    return (
        <header className={`flex xl:justify-start justify-center w-full 
        py-[20px] xl:px-[100px] xl:pt-0 pt-[30px] xl:gap-[80px] z-40 ${className}`}>
            <Link href="/">
                <img src="/images/logo.png" alt="imagem da logo" className="xl:flex hidden w-auto xl:h-[100px] h-[70px]" />
            </Link>
            <nav
                className="xl:flex hidden justify-center items-center w-full gap-[100px] font-fontePrimaria
            text-white">
                <StoreMenu />
                <div className="flex gap-[30px]">
                    <InputSearch />
                    <Cart id="cart" />
                </div>
            </nav>

            <div className="flex flex-col xl:hidden w-full">
                {/* drawer com navbar do daisy */}
                <nav className="grid grid-cols-3 gap-[20px] w-full drawer">
                    <aside className="drawer place-items-center">
                        <input id="banner-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="banner-drawer" className="bg-transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    className="inline-block w-auto h-[35px] stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                                    </path></svg>
                            </label>
                        </div>
                        <div className="drawer-side h-full">
                            <label htmlFor="banner-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-black h-full w-[320px] px-[20px] py-[20px] gap-[40px]">
                                <label
                                    htmlFor="banner-drawer"
                                    className="text-[40px] font-fontePrimaria font-bold cursor-pointer text-white place-self-end"
                                >
                                    ×
                                </label>
                                <StoreMenu />
                            </ul>
                        </div>
                    </aside>
                    <Link href="/">
                        <img src="/images/logo.png" alt="imagem da logo" className="w-auto h-[70px] place-self-center" />
                    </Link>
                    <div className="place-self-center">
                        <Cart id="cart-mobile" />
                    </div>

                </nav>
                <div className="mt-[20px] place-self-center">
                    <InputSearch />
                </div>
            </div>

        </header>
    )
}

export default Banner