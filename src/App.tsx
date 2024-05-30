import HeaderContent from "./components/headerContent/HeaderContent";
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import bannerHeader from "./assets/png/bannerHeader.png";
import HeaderBottomMenu from "./components/headerBottomMenu/HeaderBottomMenu";
import PromotionItems from "./components/promotionItems/PromotionItems";
import OpeningHours from "./components/openingHours/OpeningHours";

function App() {
  return (
    <div>
      <HeaderMenu />
      <img src={bannerHeader} alt={""} className="w-full h-520 z-0 relative" />
      <HeaderContent />
      <HeaderBottomMenu />
      <PromotionItems />
      <OpeningHours />
    </div>
  );
}

export default App;
