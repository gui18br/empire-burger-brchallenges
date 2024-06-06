import HeaderBottomMenu from "../../headerBottomMenu/HeaderBottomMenu";
import HeaderContent from "../../headerContent/HeaderContent";
import HeaderMenu from "../../headerMenu/HeaderMenu";
import bannerHeader from "../../../assets/png/bannerHeader.png";
import bannerMobile from "../../../assets/png/Banner mobile 1.png";
import { Element } from "react-scroll";

export const Header = () => {
  return (
    <Element name="home">
      <div className="relative">
        <HeaderMenu />
        <HeaderContent />
        <img
          src={bannerHeader}
          alt={""}
          className="hidden md:block w-full xl:h-520 lg:h-[500px] md:[600px] h-[450px] z-0 relative"
        />
        <img
          src={bannerMobile}
          alt={""}
          className="block md:hidden w-full z-0 relative"
        />
        <HeaderBottomMenu />
      </div>
    </Element>
  );
};
