"use client";
import React from "react";
import LoginUser from "@/components/pages/auth/loginUser";
import { User } from "@/types/user.types";
import useSWR from "swr";
import { loginUser } from "@/lib/actions/user.actions";
const Callback = ({ searchParams }: { searchParams: { token: string } }) => {
  const { data, isLoading } = useSWR(
    "login.user",
    async () => await loginUser(searchParams?.token)
  );

  const user = {
    id: !isLoading && data.id,
    email: !isLoading && data.email,
    name: !isLoading && data.name,
    access_token: !isLoading && data.access_token,
  } satisfies User;
  return <div>{!isLoading && <LoginUser user={user} />}</div>;
};

export default Callback;
