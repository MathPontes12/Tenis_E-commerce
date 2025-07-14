import Banner from "@/components/banner/Banner"
import StorePage from "@/components/categories/Categories"

import CategoriesProvider from "@/components/categories/contextCategories/CategoriesProvider"
import Footer from "@/components/footer/Footer"
import Whatsapp from "@/components/whatsapp/Whatsapp"

const Store = () => {



    return (

        <div>
            <Banner className='bg-black' />

            <main className="bg-[#f5f5f5] h-screen w-full flex font-fontePrimaria">
                <CategoriesProvider>
                    <StorePage/>
                </CategoriesProvider>
            </main>

            <Whatsapp/>
            <Footer/>
        </div >

    )
}

export default Store