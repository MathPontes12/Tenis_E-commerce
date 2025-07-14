import FilterCategory from "./filters/filterCategory"
import FilterColor from "./filters/filterColor"
import FilterPrice from "./filters/filterPrice"


const Filters = () => {
    return (
        <>
            <FilterCategory />
            <FilterColor />
            <FilterPrice />
        </>
    )
}

export default Filters