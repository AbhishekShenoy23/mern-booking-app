import axios, { AxiosResponse } from "axios";
import { UserForm } from "../constants/constant";

const api_url = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const registerHttp = async (data: UserForm) => {
  try {
    const response = await api_url.post("/users/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const axiosResponse = error.response as AxiosResponse;
      console.error("Error status:", axiosResponse.status);
      console.error("Error data:", axiosResponse.data.message);
      throw new Error(axiosResponse.data.message || "Failed to register");
    } else {
      console.error("Error:", error.message);
      throw new Error("Failed to register genericc error");
    }
  }
};
