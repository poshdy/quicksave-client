import axios from "axios";
import { BASE_URL } from "../constants";

export async function loginUser(token: string) {
  try {
    const res = await axios.get(
      `${BASE_URL}/auth/login/callback?token=${token}`,
      { withCredentials: true }
    );

    console.log(res.headers["set-cookie"]);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
