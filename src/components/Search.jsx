import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../utils/rapidApi";
import Sidebar from "./Sidebar";
import SearchCards from "./SearchCards";

export default function Search() {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    FetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
      console.log(contents);
      setResult(contents);
    });
  };

  return (
    <div className="">
      <div className="mt-16 flex flex-row h-[calc(100%-56px)">
        <Sidebar />
        <div className="px-5 pb-8 mt-3 h-[calc(100vh-79.46px)] custom-scrollbar overflow-y-scroll overflow-x-hidden w-[100%]">
          <div className="grid grid-cols-1 gap-2 p-2 cursor-default">
            {result?.map((item, idx) => {
              if (item.type !== "video") return false;
              return <SearchCards key={idx} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
