import { useEffect, useState } from "react";
import bannerMenu from "../../assets/png/bannerMenu.png";
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
    <div className="mt-16 flex">
      <div className="relative">
        <img src={bannerMenu} alt="Banner Menu" className="w-full h-full" />
        <div className="absolute inset-0 flex flex-col justify-center items-start ml-52">
          <div className="flex items-center w-[500px]">
            <h1 className="text-secondary font-bold text-[41px] mr-2">
              ESCOLHA O SEU COMBO IMPERIAL,{" "}
              <span className="inline bg-300 rounded-lg p-1">PEÇA AGORA!</span>
            </h1>
          </div>
          <div className="flex items-center mt-5">
            <h2 className="text-primary text-start text-[16px] mr-1 mb-4">
              Temos vários tipos de pratos para a nossa realeza, fique esperto
              porque temos sempre promoção!
            </h2>
          </div>
          <button className="bg-red-600 text-white h-11 w-52 rounded-md text-[16px] mt-3">
            Ver Cardápio Completo
          </button>
        </div>
      </div>
      <div className="bg-orange-950 w-[750px] h-auto">
        <div className="flex justify-start ml-7 mt-16">
          <h1 className="text-yellow-500 text-32 font-bold">
            Cardápio imperial | Burger
          </h1>
        </div>
        <div className="flex ml-7 mt-[18.5px]">
          <ul>
            {menuItems.map((menuItem, index) => (
              <li className="flex flex-col" key={index}>
                <div>
                  <div className="flex text-white text-20 font-bold">
                    <h2>
                      {menuItem.plate}
                      ...............................................
                    </h2>
                    <p>
                      Price: R${menuItem.price.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <p className="text-white mb-10">{menuItem.ingredients}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
