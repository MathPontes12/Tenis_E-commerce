
import Banner from "@/components/banner/Banner";
import CarouselHome from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export default function Home() {
  return (
    <>
    <div className="flex flex-col">
      <Banner className="absolute"/>
      
      <CarouselHome/>
      
      <Whatsapp/>
      <Footer/>
    </div>
    </>
  );
}
