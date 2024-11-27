import { axiosClient } from "../axios/client";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGenerateUrls = () =>
  useMutation<{ message: string }, AxiosError<{ message: string }>, FormData>({
    mutationFn: async (files: FormData) => {
      const {
        data: { message },
      } = await axiosClient.post<{ message: string }>("/files/upload", files);
      return { message };
    },
    onSuccess: (data) => {
      console.log("success", data);
    },
    onError: (error) => {
      console.error("error", error.response?.data.message);
    },
  });
