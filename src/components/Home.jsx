import React from "react";
import Sidebar from "./Sidebar";
import HomeVideos from "./HomeVideos";
import { useAuth } from "../context/AuthProvider";
import Categories from "./Categories";

export default function Home() {
  const { Loading, Data } = useAuth();

  console.log(Loading);
  console.log(Data);

  return (
    <div className="w-[100%] flex mt-16">
      <Sidebar />
      <div className="px-10 pb-8 mt-3 h-[calc(100vh-79.46px)] custom-scrollbar overflow-y-scroll overflow-x-hidden ">
        <Categories />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          {Data.map(
            (item) =>
              // Only show videos on my home screen , when the type is video:

              item.type == "video" && (
                <HomeVideos key={item.id} video={item?.video} />
              )
          )}
        </div>
      </div>
    </div>
  );
}
