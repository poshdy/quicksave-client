export type UserWithDates = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  access_token: string;
};

export type User = Omit<UserWithDates, "createdAt" | "updatedAt"> & {
  id: string | null;
  name: string | null;
  email: string | null;
  access_token: string | null;
};
