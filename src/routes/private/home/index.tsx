import React from "react";
import dp from "../../../assets/brooks-leibee-562087-unsplash.jpg";
import dp1 from "../../../assets/249921.jpg";
import dp2 from "../../../assets/art_graffiti_wall_faces_120074_3840x2400.jpg";
import dp3 from "../../../assets/headphones_camera_retro_122094_3840x2400.jpg";
import dp4 from "../../../assets/inscription_motivation_dark_background_texture_119598_3840x2400.jpg";
import dp5 from "../../../assets/wallpaperflare.com_wallpaper (3).jpg";
import dp6 from "../../../assets/wallpaperflare.com_wallpaper (8).jpg";
import HomeWrapper from "./homeWrapper";
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
const artists = [
  {
    name: "The Weekend",
    albumArt: dp3
  },
  {
    name: "The Weekend",
    albumArt: dp4
  },
  {
    name: "The Weekend",
    albumArt: dp5
  }
];

const Home: React.FC<any> = () => {
  return (
    <HomeWrapper
      profileImage={dp}
      playlists="0"
      followers="0"
      following="0"
      tracks={tracks}
      artists={artists}
    />
  );
};
export default Home;
