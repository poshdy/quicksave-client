"use client";
import LoginUser from "@/components/pages/auth/loginUser";
import { BASE_URL } from "@/lib/constants";
import { User } from "@/types/user.types";
import axios from "axios";
import React from "react";
import useSWR from "swr";

const SignUpCallback = ({
  searchParams,
}: {
  searchParams: { code: string };
}) => {
  const { data, isLoading } = useSWR(
    "signup.callback",
    async () =>
      await axios.get(
        `${BASE_URL}/auth/google/callback?code=${searchParams?.code}`,
        { withCredentials: true }
      )
  );

  const user = {
    id: !isLoading && data?.data?.id,
    email: !isLoading && data?.data?.email,
    name: !isLoading && data?.data?.name,
    access_token: !isLoading && data?.data?.access_token,
  } satisfies User;
  return <div>{!isLoading && <LoginUser user={user} />}</div>;
};

export default SignUpCallback;
