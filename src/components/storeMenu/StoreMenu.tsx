import Link from "next/link"

const StoreMenu = () => {

    return (

        <div>
            <ul className="menu xl:menu-horizontal menu-vertical xl:gap-[100px] gap-[30px] text-[26px]">
                <li className="z-50">
                    <details>
                        <summary className="text-shadow-black text-shadow-md font-bold">Loja</summary>
                        <ul className="flex flex-col w-[200px] xl:bg-[#f5f5f5] bg-black xl:text-black
                        xl:text-[21px] text-[24px] xl:gap-0 gap-[10px]">
                            <p className="flex justify-center">- Categorias -</p>
                            <Link href={`/loja/`} className="hover:text-white hover:bg-black cursor-pointer pl-[5px]">
                            <li>Social</li>
                            </Link>
                            <Link href={`/loja/`} className="hover:text-white hover:bg-black cursor-pointer pl-[5px]">
                            <li>Esporte</li>
                            </Link>
                            <Link href={`/loja/`} className="hover:text-white hover:bg-black cursor-pointer pl-[5px]">
                            <li>Corrida</li>
                            </Link>
                        </ul>
                    </details>
                </li>
                <li className="z-40"><Link href="/sobre"><summary className="text-shadow-black text-shadow-md font-bold">Sobre</summary></Link></li>
            </ul>
        </div>

    )
}

export default StoreMenu