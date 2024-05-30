import axios from "axios";

const apiURL = "https://api.brchallenges.com/api/empire-burger/menu";

interface MenuItemsResponse {
  plate: string;
  price: number;
  ingredients: string;
}

export const menuBurger = async (): Promise<MenuItemsResponse[]> => {
  try {
    const response = await axios.get<MenuItemsResponse[]>(apiURL);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error("Error fetching menu items");
  }
};
