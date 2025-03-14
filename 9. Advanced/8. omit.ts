{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, "url" | "data">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "s",
      data: "s",
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }
}
