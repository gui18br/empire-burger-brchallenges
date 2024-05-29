import HeaderContent from "./components/headerContent/HeaderContent";
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import bannerHeader from "./assets/png/bannerHeader.png";
import HeaderBottomMenu from "./components/headerBottomMenu/HeaderBottomMenu";

function App() {
  return (
    <div>
      <HeaderMenu />
      <img src={bannerHeader} alt={""} className="w-full h-520 z-0 relative" />
      <HeaderContent />
      <HeaderBottomMenu />
    </div>
  );
}

export default App;
