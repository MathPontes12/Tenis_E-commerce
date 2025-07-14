import { Circle } from "lucide-react"
import { buttonsProps } from "./buttonsType"


const ButtonCarousel = ({ state, className }:buttonsProps ) => {
    return (

        <button onClick={state}><Circle className= {`${className} w-[15px] h-auto cursor-pointer`}/></button>

    )
}

export default ButtonCarousel