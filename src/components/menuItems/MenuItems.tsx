import { useEffect, useState } from "react";
import bannerMenu from "../../assets/png/Rectangle 610.png";
import bannerMenu2 from "../../assets/png/bannerOferta2.png";
import { getMenuBurger } from "../../services/routes";

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
    <div className="flex flex-col justify-center md:items-center w-full">
      <div className="mt-16 flex flex-col md:flex-row">
        <div className="relative">
          <img
            src={bannerMenu}
            alt="Banner Menu"
            className="w-full h-full hidden md:block"
          />
          <img
            src={bannerMenu2}
            alt="Banner Menu"
            className="w-full h-[250px] block md:hidden"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center w-[140px] ml-24 md:ml-9">
            <div className="xl:ml-48 md:ml-52">
              <div className="flex items-center xl:w-[500px] md:w-[400px]">
                <h1 className="text-secondary font-bold md:text-[41px] text-25">
                  ESCOLHA O SEU COMBO IMPERIAL,{" "}
                  <span className="inline bg-300 rounded-lg p-1">
                    PEÇA AGORA!
                  </span>
                </h1>
              </div>
              <div className="flex items-center md:mt-5 mt-2">
                <h2 className="text-primary text-start md:text-[16px] text-[14px] text-sm mr-1 mb-4 w-[280px] ">
                  Temos vários tipos de pratos para a nossa realeza, fique
                  esperto porque temos sempre promoção!
                </h2>
              </div>
              <button className="bg-red-600 text-white h-11 w-52 rounded-md text-[16px] md:mt-3 transition-transform transform hover:-translate-y-1">
                Ver Cardápio Completo
              </button>
            </div>
          </div>
        </div>
        <div className="bg-orange-950 md:w-[60%] h-auto">
          <div className="">
            <div className="flex flex-col justify-center ml-7 md:justify-start">
              <div className="flex justify-start mt-16">
                <h1 className="text-yellow-500 text-32 md:block hidden">
                  Cardápio imperial | Burger
                </h1>
                <h1 className="text-yellow-500 text-25 md:hidden block">
                  Nossa especialidade
                </h1>
              </div>
              <div className="flex mt-[18.5px] text-[#FAE4D0]">
                <ul>
                  {menuItems.map((menuItem, index) => (
                    <li
                      className="flex flex-col md:w-full w-[340px]"
                      key={index}
                    >
                      <div>
                        <div className="flex text-white md:text-20 text-18">
                          <h1>{menuItem.plate}</h1>
                          <h1 className="md:block hidden">
                            .....................................
                            {new Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(menuItem.price)}
                          </h1>
                          <h1 className="md:hidden block">
                            .......................
                            {new Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(menuItem.price)}
                          </h1>
                        </div>
                        <p className="text-white mb-10 text-[14px] md:w-[500px] w-[320px]">
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
      </div>
    </div>
  );
}

export default MenuItems;
