import { createContext } from "react";
import { filterProps } from "../filters/filterType";


const ContextCategories = createContext<filterProps | undefined>(undefined);

export default ContextCategories