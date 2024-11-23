"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { LoginPayload, loginSchema } from "@/form-schemas/auth";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TfiBolt } from "react-icons/tfi";
const LoginForm = () => {
  // const { login } = useUser();
  // const { push } = useRouter();
  const form = useForm<LoginPayload>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
    mode: "all",
  });

  const isLoading = form.formState.isLoading;
  const isSubmitting = form.formState.isSubmitting;
  const handleSubmit = async (values: LoginPayload) => {
    const response = await axios.post(
      "http://localhost:8000/api/auth/login",
      { destination: values.email },
      { withCredentials: true }
    );
    console.log(response.data);
    toast.success("Email sent!");
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="flex flex-col items-center  text-center">
              <TfiBolt size={50} />
              <h1 className="text-4xl font-bold leading-tight tracking-tighter">
                Welcome Back!
              </h1>
            </div>
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={isLoading || isSubmitting}
                // variant={"secondary"}
                type="submit"
                className="w-full"
              >
                {isLoading || isSubmitting ? "Loading..." : "Login!"}
              </Button>

              <div className="mt-4 text-center text-sm   ">
                Don&apos;t have an account?{" "}
                <Link href="sign-up" className="underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
