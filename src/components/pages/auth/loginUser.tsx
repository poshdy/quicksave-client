"use client";
import Title from "@/components/ui/title";
import { User } from "@/types/user.types";
import { userStore } from "@/zustand/user.store";
import React, { useEffect } from "react";
import Link from "next/link";
type Props = {
  user: User;
};

const LoginUser = ({ user }: Props) => {
  const { login } = userStore();

  useEffect(() => {
    login(user);
  }, [user, login]);
  return (
    <div>
      <Title className="text-5xl" title={`Welcome back ${user.name}`} />
      <Link href={"/dashboard"}>Go to your dashboard!</Link>
    </div>
  );
};

export default LoginUser;
