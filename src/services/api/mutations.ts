import { api } from ".";

export const useLoginUser = async (username: string, password: string) => {
  try {
    const response = await api.post("/auth/login", {
      username,
      password,
    });
    console.log("Login response:", response.data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};