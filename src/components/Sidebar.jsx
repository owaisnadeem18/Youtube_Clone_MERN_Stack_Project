import React from "react";
import HomeIcon from "../../src/assets/home.svg";
import ShortsIcon from "../../src/assets/shorts.svg";
import Subscription from "../../src/assets/Subscriptions.svg";
import YourChannelIcon from "../../src/assets/YourChannel.svg";
import HistoryIcon from "../../src/assets/History.svg";
import PlaylistsIcon from "../../src/assets/Playlists.svg";
import YourVideosIcon from "../../src/assets/Your-Videos.svg";
import WatchLaterIcon from "../../src/assets/WatchLater.svg";
import LikedVideosIcon from "../../src/assets/LikedVideos.svg";
import YouIcon from "../../src/assets/YouIcon.svg";
import TrendingIcon from "../../src/assets/Trending.svg";
import MusicIcon from "../../src/assets/Music.svg";
import GamingIcon from "../../src/assets/Gaming.svg";
import NewsIcon from "../../src/assets/News.svg";
import SportsIcon from "../../src/assets/Sports.svg";
import "../App.css";

export default function Sidebar() {
  const slideBarElements = [
    {
      id: 1,
      name: "Home",
      icon: HomeIcon,
    },
    {
      id: 2,
      name: "Shorts",
      icon: ShortsIcon,
    },
    {
      id: 3,
      name: "Subscription",
      icon: Subscription,
    },
  ];

  const slideBarElements2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: YourChannelIcon,
    },
    {
      id: 2,
      name: "History",
      icon: HistoryIcon,
    },
    {
      id: 3,
      name: "Playlists",
      icon: PlaylistsIcon,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: YourVideosIcon,
    },
    {
      id: 5,
      name: "Watch Later",
      icon: WatchLaterIcon,
    },
    {
      id: 6,
      name: "Liked Videos",
      icon: LikedVideosIcon,
    },
  ];

  const slideBarElements3 = [
    {
      id: 1,
      name: "Trending",
      icon: TrendingIcon,
    },
    {
      id: 2,
      name: "Music",
      icon: MusicIcon,
    },
    {
      id: 3,
      name: "Gaming",
      icon: GamingIcon,
    },
    {
      id: 4,
      name: "News",
      icon: NewsIcon,
    },
    {
      id: 5,
      name: "Sports",
      icon: SportsIcon,
    },
  ];

  return (
    <>
      <div className="px-6 py-2  ">
        <div className="flex flex-col w-[13%]  custom-scrollbar overflow-y-scroll overflow-x-hidden h-[calc(100vh - 6.625rem)]">
          {slideBarElements.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 rounded-xl p-2"
            >
              <img src={item.icon} alt="Home Icon" className="cursor-pointer" />
              <span className="cursor-pointer">{item.name}</span>
            </div>
          ))}
          <div className="mt-4"></div>
          <hr />

          <div className="mt-4 mb-4 flex items-center gap-2 px-2">
            <h1 className="font-semibold">You</h1>
            <img src={YouIcon} alt="" />
          </div>

          {slideBarElements2.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 rounded-xl p-2"
            >
              <img src={item.icon} alt="Home Icon" className="cursor-pointer" />
              <span className="cursor-pointer">{item.name}</span>
            </div>
          ))}
          <div className="mt-4"></div>
          <hr />

          {/* Explore section of the website */}

          <div className="mt-4 mb-4 px-2">
            <h1>Explore</h1>
          </div>

          {slideBarElements3.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 rounded-xl p-2"
            >
              <img src={item.icon} alt="Home Icon" className="cursor-pointer" />
              <span className="cursor-pointer">{item.name}</span>
            </div>
          ))}
          <div className="mt-4"></div>
          <hr />
        </div>
      </div>
    </>
  );
}
