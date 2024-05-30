import HeaderContent from "./components/headerContent/HeaderContent";
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import bannerHeader from "./assets/png/bannerHeader.png";
import HeaderBottomMenu from "./components/headerBottomMenu/HeaderBottomMenu";
import PromotionItems from "./components/promotionItems/PromotionItems";
import OpeningHours from "./components/openingHours/OpeningHours";
import MenuItems from "./components/menuItems/MenuItems";
import PersonalizedService from "./components/personalizedService/PersonalizedService";

function App() {
  return (
    <div>
      <HeaderMenu />
      <img src={bannerHeader} alt={""} className="w-full h-520 z-0 relative" />
      <HeaderContent />
      <HeaderBottomMenu />
      <PromotionItems />
      <OpeningHours />
      <MenuItems />
      <PersonalizedService />
      <div className="flex flex-col justify-center items-center mt-[128px]">
        <hr className="w-[1000px] border-gray-400" />
      </div>
    </div>
  );
}

export default App;
