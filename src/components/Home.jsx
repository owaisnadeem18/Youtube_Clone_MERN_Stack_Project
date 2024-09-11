import React from "react";
import Sidebar from "./Sidebar";
import HomeVideos from "./HomeVideos";
import { useAuth } from "../context/AuthProvider";

export default function Home() {
  const { Loading, Data } = useAuth();

  console.log(Loading);
  console.log(Data);

  return (
    <div className="flex">
      <Sidebar />
      <div className=" ">
        {Data.map(
          (item) =>
            // Only show videos on my home screen , when the type is video:

            item.type == "video" && (
              <HomeVideos key={item.id} video={item?.video} />
            )
        )}
      </div>
    </div>
  );
}
