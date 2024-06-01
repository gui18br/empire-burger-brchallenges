import CarouselItems from "../../carouselItems/CarouselItems";
import Delivery from "../../delivery/Delivery";
import MenuItems from "../../menuItems/MenuItems";
import OpeningHours from "../../openingHours/OpeningHours";
import PersonalizedService from "../../personalizedService/PersonalizedService";
import PromotionItems from "../../promotionItems/PromotionItems";
import { SocialPosts } from "../../socialPosts/SocialPosts";

export const Body = () => {
  return (
    <div>
      <PromotionItems />
      <OpeningHours />
      <MenuItems />
      <PersonalizedService />
      <CarouselItems />
      <SocialPosts />
      <Delivery />
    </div>
  );
};
