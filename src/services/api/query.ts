import { api } from ".";

export const useGetUser = async () => {
  try {
    const response = await api.get("/auth/me");
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchProducts = async (query: string) => {
  try {
    const response = await api.get(`/products/search?q=${query}`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};