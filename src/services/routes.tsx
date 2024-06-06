import axios from "axios";

const apiURL = "https://api.brchallenges.com/api/empire-burger";

interface MenuItemsResponse {
  plate: string;
  price: number;
  ingredients: string;
}

interface TestimonialsResponse {
  name: string;
  image: string;
  age: string;
  testimonial: string;
}

export const getMenuBurger = async (): Promise<MenuItemsResponse[]> => {
  try {
    const response = await axios.get<MenuItemsResponse[]>(`${apiURL}/menu`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error("Error fetching menu items");
  }
};

export const getTestimonials = async (): Promise<TestimonialsResponse[]> => {
  try {
    const response = await axios.get<TestimonialsResponse[]>(
      `${apiURL}/testimonials`
    );
    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error("Error fetching menu items");
  }
};
