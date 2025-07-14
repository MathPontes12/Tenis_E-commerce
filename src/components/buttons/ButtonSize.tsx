import { buttonsProps } from "./buttonsType"


const ButtonSize = ({tamanho, tamanhoSelecionado, setTamanhoSelecionado }: buttonsProps) => {

    

    const AoClicar = (tamanho:string) => {            
            setTamanhoSelecionado?.(tamanho)
    }

    return (
        <>
        <button onClick={() => AoClicar(`${tamanho}`)} className={`xl:text-[20px] text-[18px] border-[1px] border-black cursor-pointer
            w-[50px] h-fit p-[10px] ${tamanhoSelecionado === tamanho ? 'text-white bg-black' : 'text-black bg-white'} `}
        >
            {tamanho}
        </button>
        </>
    )
}

export default ButtonSize