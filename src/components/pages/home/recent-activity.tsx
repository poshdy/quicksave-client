"use client";
import { axiosClient } from "@/lib/axios/client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Recents = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => await axiosClient.get("folders"),
    select(data) {
      const folders: { id: string; name: string; createdAt: string }[] =
        data.data;
      return folders;
    },
  });

  if (isError) {
    console.log(error);
  }
  if (isLoading) {
    return <div>Loadingg..</div>;
  }
  return (
    <div>
      {data?.map((f) => (
        <div key={f.id}>{f.name}</div>
      ))}
    </div>
  );
};

export default Recents;
