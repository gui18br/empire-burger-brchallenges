import HeaderBottomMenu from "../../headerBottomMenu/HeaderBottomMenu";
import HeaderContent from "../../headerContent/HeaderContent";
import HeaderMenu from "../../headerMenu/HeaderMenu";
import bannerHeader from "../../../assets/png/bannerHeader.png";

export const Header = () => {
  return (
    <div>
      <div className="relative">
        <HeaderMenu />
        <img
          src={bannerHeader}
          alt={""}
          className="w-full h-520 z-0 relative"
        />
        <HeaderBottomMenu />
      </div>
      <HeaderContent />
    </div>
  );
};
