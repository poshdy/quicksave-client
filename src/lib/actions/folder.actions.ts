import { CreateFolderPayload } from "@/form-schemas/folder";
import { axiosClient } from "../axios/client";

export const createFolder = async (data: CreateFolderPayload) => {
  try {
    const response = await axiosClient.post("/folders", data);
    if (response.status !== 201) {
      return response.data;
    }

    return;
  } catch (error) {
    console.log(error);
  }
};
