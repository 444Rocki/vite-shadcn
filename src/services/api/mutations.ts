import { api } from ".";
import { setCookie } from "../storage";

export const useLoginUser = async (username: string, password: string) => {
  try {
    const response = await api.post("/auth/login", {
      username,
      password,
    });

    const { accessToken } = response.data;
    
    if (accessToken) {
      setCookie("accessToken", accessToken);
    }
    
    console.log("Login response:", response.data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};