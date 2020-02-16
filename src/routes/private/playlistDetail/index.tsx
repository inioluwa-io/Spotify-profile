import React from "react";
import PlaylistDetailsWrapper from "./playlistDetailsWrapper";
import dp5 from "../../../assets/wallpaperflare.com_wallpaper (3).jpg";
import dp1 from "../../../assets/249921.jpg";
import dp2 from "../../../assets/art_graffiti_wall_faces_120074_3840x2400.jpg";
import dp6 from "../../../assets/wallpaperflare.com_wallpaper (8).jpg";

const playlist = {
  name: "Dream",
  albumArt: dp5,
  tracks: [
    {
      title: "Emotions",
      album: "Starboy",
      artist: "The Weekend",
      albumArt: dp1,
      time: "3:40"
    },
    {
      title: "Emotions",
      artist: "The Weekend",
      album: "Starboy",
      albumArt: dp6,
      time: "3:22"
    },
    {
      title: "Emotions",
      artist: "The Weekend",
      album: "Starboy",
      albumArt: dp2,
      time: "3:34"
    }
  ],
  author: "Inioluwa"
};
const PlaylistDetails: React.FC<any> = () => {
  return (
    <PlaylistDetailsWrapper
      name={playlist.name}
      tracks={playlist.tracks}
      albumArt={playlist.albumArt}
      author={playlist.author}
    />
  );
};
export default PlaylistDetails;
