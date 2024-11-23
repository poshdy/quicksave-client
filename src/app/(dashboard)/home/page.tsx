import Actions from "@/components/pages/home/action";
import FileTypesCount from "@/components/pages/home/file-types.count";
import Recents from "@/components/pages/home/recent-activity";
import React from "react";

const Home = () => {
  return (
    <section>
      <Actions />
      <Recents />
      <FileTypesCount />
    </section>
  );
};

export default Home;
