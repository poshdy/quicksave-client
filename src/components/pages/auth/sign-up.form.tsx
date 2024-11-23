"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TfiBolt } from "react-icons/tfi";
import { AiOutlineGoogle } from "react-icons/ai";
import { BASE_URL } from "@/lib/constants";
const SignUpForm = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="flex flex-col items-center  text-center">
          <TfiBolt size={50} />
          <h1 className="text-4xl font-bold leading-tight tracking-tighter">
            Hi!
          </h1>
        </div>

        <Button
          onClick={() =>
            window.open(`${BASE_URL}/auth/google/register`, "_self")
          }
          className="w-full"
        >
          sign up with google <AiOutlineGoogle size={40} />
        </Button>

        <div className="mt-4 text-center text-sm   ">
          Already have an account?
          <Link href="sign-in" className="underline">
            sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
