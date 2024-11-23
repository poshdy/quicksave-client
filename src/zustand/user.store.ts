import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "@/types/user.types";
interface IUser {
  id: string | null;
  name: string | null;
  email: string | null;
  access_token: string | null;

  login: (payload: User) => void;
  logout: () => void;
  refreshToken: (access_token: string) => void;
}

export const userStore = create<IUser>()(
  devtools(
    persist(
      (set) => ({
        id: null,
        access_token: null,
        email: null,
        name: null,
        logout() {
          set({ access_token: null, name: null, email: null, id: null });
        },
        login(payload) {
          set({ ...payload });
        },
        refreshToken(new_access) {
          set({ access_token: new_access });
        },
      }),

      {
        name: "quicksave-user",
      }
    )
  )
);
