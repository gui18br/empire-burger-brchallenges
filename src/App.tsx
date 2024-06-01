import HeaderContent from "./components/headerContent/HeaderContent";
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import bannerHeader from "./assets/png/bannerHeader.png";
import HeaderBottomMenu from "./components/headerBottomMenu/HeaderBottomMenu";
import PromotionItems from "./components/promotionItems/PromotionItems";
import OpeningHours from "./components/openingHours/OpeningHours";
import MenuItems from "./components/menuItems/MenuItems";
import PersonalizedService from "./components/personalizedService/PersonalizedService";
import CarouselItems from "./components/carouselItems/CarouselItems";
import { SocialPosts } from "./components/socialPosts/SocialPosts";
import Delivery from "./components/delivery/Delivery";
import { Location } from "./components/location/Location";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="bg-[#FAF3F2]">
      <HeaderMenu />
      <img src={bannerHeader} alt={""} className="w-full h-520 z-0 relative" />
      <HeaderContent />
      <HeaderBottomMenu />
      <PromotionItems />
      <OpeningHours />
      <MenuItems />
      <PersonalizedService />
      <div className="flex flex-col justify-center items-center mt-[128px]">
        <hr className="w-[88%] border-[#1D060526]" />
      </div>
      <CarouselItems />
      <SocialPosts />
      <Delivery />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
