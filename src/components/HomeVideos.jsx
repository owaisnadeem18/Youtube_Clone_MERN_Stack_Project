import React from "react";
import { Link } from "react-router-dom";
import VideoTimeStamp from "./VideoTimeStamp";

export default function HomeVideos({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="">
          <div className="relative  overflow-hidden md:rounded-xl hover:rounded-none duration-200 ">
            <img
              className="w-full"
              src={`${video?.thumbnails[0].url}`}
              alt=""
            />
            {video.lengthSeconds && (
              <VideoTimeStamp time={video?.lengthSeconds} />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
