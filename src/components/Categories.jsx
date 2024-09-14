import React from "react";
import "./Categories.css";

export default function Categories() {
  const arr = [
    "All",
    "Skills",
    "JavaScript",
    "Podcasts",
    "Cricket",
    "Islam",
    "React JS",
    "Next JS",
    "Motivation",
    "Self Investment",
    "Self growth",
    "Knowledge",
    "Health",
    "Gym",
    "Fitness",
    "Mindset",
    "Success",
    "Inspiration",
  ];

  return (
    <>
      <div className="flex gap-6 text-nowrap overflow-x-scroll custom-scrollbar pb-2 mb-6 hide-scroll-bar">
        {arr.map((categ) => {
          return (
            <>
              <p
                className="w-fit px-3 bg-gray-200 py-1 rounded-lg hover:bg-gray-300 cursor-pointer duration-300"
                key={categ}
              >
                {categ}
              </p>
            </>
          );
        })}
      </div>
    </>
  );
}
