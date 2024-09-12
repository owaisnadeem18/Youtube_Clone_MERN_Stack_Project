import moment from "moment";
import React from "react";

export default function VideoTimeStamp({ time }) {
  const videoDuration = moment.duration(time, "seconds");

  let hours = videoDuration.hours();
  let minutes = videoDuration.minutes();
  let seconds = videoDuration.seconds();

  let videoTime =
    hours > 0
      ? `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`
      : `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  return (
    <div className="absolute bottom-3 text-base rounded-md font-semibold px-2 py-1 right-2 bg-black text-white">
      {videoTime}
    </div>
  );
}
