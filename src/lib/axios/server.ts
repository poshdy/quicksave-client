import axios from "axios";
import { BASE_URL } from "../constants";
import { userStore } from "@/zustand/user.store";
// import { jwtDecode } from "jwt-decode";
// import dayjs from "dayjs";
export const axiosServer = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { Authorization: userStore?.getState()?.access_token },
});

// axiosClient.interceptors.request.use(async (req) => {
//   const token = userStore.getState().access_token;
//   const admin = jwtDecode(token as string);
//   const isEx = dayjs.unix(admin.exp as number).diff(dayjs()) < 1;
//   if (!isEx) return req;
//   const res = await axios.get(`${BASE_URL}/auth/refresh`, {
//     withCredentials: true,
//   });
//   const newToken = userStore.getState().refreshToken(res?.data?.access_token);
//   req.headers.Authorization = `Bearer ${newToken}`;
//   return req;
// });
