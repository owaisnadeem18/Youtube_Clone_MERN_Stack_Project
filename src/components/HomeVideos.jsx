import React from "react";
import { Link } from "react-router-dom";
import VideoTimeStamp from "./VideoTimeStamp";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

export default function HomeVideos({ video }) {
  console.log(video);

  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="">
          {/* For video thumbnail */}
          <div className="relative overflow-hidden md:rounded-xl hover:rounded-none duration-200 ">
            <img
              className="w-full"
              src={`${video?.thumbnails[0].url}`}
              alt=""
            />
            {video.lengthSeconds && (
              <VideoTimeStamp time={video?.lengthSeconds} />
            )}
          </div>

          {/* For video description , channel profile img , title  */}
          <div className="flex items-start gap-3  mt-2">
            <div className="flex items-start">
              <div className="h-9 w-9 mx-2 my-3 flex">
                <img
                  className="rounded-full border"
                  src={video?.author?.avatar[0].url}
                  alt=""
                />
              </div>
            </div>
            <div>
              <span className="font-semibold text-sm line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center gap-1 text-[14px] text-gray-600 ">
                {video?.author?.title}{" "}
                {video?.author?.badges[0]?.type == "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="w-3 h-3" />
                )}{" "}
              </span>

              {/* Here we have to use another div in order to show the views and (how old the video is) */}

              <div className="flex gap-1 text-gray-600 ">
                <span className="">
                  {`${abbreviateNumber(video?.stats?.views, 2)} views`}
                </span>
                <span>•</span>
                <span>{video.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
