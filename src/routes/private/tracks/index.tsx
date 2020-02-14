import React from "react";
import TracksWrapper from "./tracksWrapper";
import dp1 from "../../../assets/249921.jpg";
import dp2 from "../../../assets/art_graffiti_wall_faces_120074_3840x2400.jpg";
import dp6 from "../../../assets/wallpaperflare.com_wallpaper (8).jpg";

const tracks = [
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
];

const Tracks: React.FC<any> = () => {
  return <TracksWrapper tracks = {tracks} />;
};
export default Tracks;
