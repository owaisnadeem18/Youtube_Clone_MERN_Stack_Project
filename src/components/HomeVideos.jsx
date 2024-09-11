import React from "react";
import { Link } from "react-router-dom";
import VideoTimeStamp from "./VideoTimeStamp";

export default function HomeVideos({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="">
          <div className="relative h-48 md:h-56 md: rounded-xl overflow-hidden hover:rounded-none duration-200 ">
            <img
              className="h-full w-full"
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
