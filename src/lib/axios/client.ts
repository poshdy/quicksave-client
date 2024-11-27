import axios from "axios";
import { BASE_URL } from "../constants";
import { userStore } from "@/zustand/user.store";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
let token = userStore?.getState()?.access_token;
export const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { Authorization: `Bearer ${token}` },
});

axiosClient.interceptors.request.use(async (req) => {
  if (!token) {
    token = userStore.getState().access_token;
    req.headers.Authorization = `Bearer ${token}`;
  }
  const user = jwtDecode(token as string);
  const isEx = dayjs.unix(user.exp as number).diff(dayjs()) < 1;
  if (!isEx) return req;
  const res = await axios.get(`${BASE_URL}/auth/refresh`, {
    withCredentials: true,
  });
  console.log(res.data);
  userStore.getState().refreshToken(res?.data?.access_token);
  req.headers.Authorization = `Bearer ${res.data.access_token}`;
  return req;
});
