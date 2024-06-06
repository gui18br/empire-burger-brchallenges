import { useEffect, useState } from "react";
import bannerMenu from "../../assets/png/Rectangle 610.png";
import bannerMenu2 from "../../assets/png/bannerOferta2.png";
import { getMenuBurger } from "../../services/routes";
import { Element } from "react-scroll";

interface MenuItemsProps {
  plate: string;
  price: number;
  ingredients: string;
}

function MenuItems() {
  const [menuItems, setMenuItems] = useState<MenuItemsProps[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await getMenuBurger();
        setMenuItems(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenuItems();

    console.log(menuItems);
  }, []);

  return (
    <Element
      name="menu"
      className="flex flex-col justify-center lg:items-center w-full h-full"
    >
      <div className="mt-16 flex flex-col lg:flex-row">
        <div className="relative">
          <div className="absolute z-10 w-full flex justify-center mt-6 lg:mt-36 ">
            <div className="w-[88%]  lg:w-full lg:ml-52 xl:ml-60">
              <div className="flex items-center xl:w-[500px] lg:w-[400px]">
                <h1 className="text-secondary font-bold lg:text-[41px] text-25">
                  ESCOLHA O SEU COMBO IMPERIAL,{" "}
                  <span className="inline bg-300 rounded-lg p-1">
                    PEÇA AGORA!
                  </span>
                </h1>
              </div>
              <div className="flex items-center lg:mt-5 mt-2">
                <h2 className="text-primary text-start lg:text-[16px] text-[14px] text-sm mr-1 mb-4 w-[350px]">
                  Temos vários tipos de pratos para a nossa realeza, fique
                  esperto porque temos sempre promoção!
                </h2>
              </div>
              <button className="bg-red-600 text-white h-11 w-52 rounded-lg text-[16px] lg:mt-3 transition-transform transform hover:-translate-y-1">
                Ver Cardápio Completo
              </button>
            </div>
          </div>
          <img
            src={bannerMenu}
            alt="Banner Menu"
            className="w-full h-full hidden lg:block"
          />
          <img
            src={bannerMenu2}
            alt="Banner Menu"
            className="w-full h-[250px] block lg:hidden"
          />
        </div>
        <div className="flex justify-center bg-orange-950 lg:w-[60%] h-full">
          <div className="flex flex-col justify-center lg:justify-start w-[88%]">
            <div className="flex justify-start mt-16">
              <h1 className="text-yellow-500 text-32 lg:block hidden">
                Cardápio imperial | Burger
              </h1>
              <h1 className="text-yellow-500 text-25 lg:hidden block">
                Nossa especialidade
              </h1>
            </div>
            <div className="flex mt-[18.5px] text-[#FAE4D0]">
              <ul>
                {menuItems.map((menuItem, index) => (
                  <li className="flex flex-col lg:w-full" key={index}>
                    <div>
                      <div className="flex text-white lg:text-20 text-18">
                        <h1>{menuItem.plate}</h1>
                        <h1 className="lg:block hidden">
                          .....................................
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(menuItem.price)}
                        </h1>
                        <h1 className="lg:hidden block">
                          .......................
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(menuItem.price)}
                        </h1>
                      </div>
                      <p className="text-white mb-10 text-[14px] lg:w-full md:w-[520px] w-[350px]">
                        {menuItem.ingredients}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default MenuItems;
