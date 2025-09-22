"use client";
import React, { useState } from "react";
import Video from "./Video";
import useVideoList from "@/hoooks/useVideoList";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  console.log(videos, "videos");
  return (
    <div>
      {videos?.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
        >
          {videos?.map((video, index) =>
            video.noq > 0 ? (
              <Video
                key={index}
                id={video.youtubeID}
                title={video.title}
                noq={video.noq}
              />
            ) : (
              <Video
                key={index}
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos?.length === 0 && <div>No Data Found!!</div>}
      {error && <div>Error Ocurred!!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
