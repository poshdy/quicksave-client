// import Actions from "@/components/pages/home/action";
import FileTypesCount from "@/components/pages/home/file-types.count";
import FileUpload from "@/components/pages/home/file-upload";
// import Recents from "@/components/pages/home/recent-activity";
import React from "react";

const Home = () => {
  return (
    <section>
      {/* <Actions /> */}
      {/* <Recents /> */}
      <FileUpload />
      <FileTypesCount />
    </section>
  );
};

export default Home;
