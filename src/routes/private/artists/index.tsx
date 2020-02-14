import React from "react";
import ArtistWrapper from "./artistsWrapper";
import dp3 from "../../../assets/headphones_camera_retro_122094_3840x2400.jpg";
import dp4 from "../../../assets/inscription_motivation_dark_background_texture_119598_3840x2400.jpg";
import dp5 from "../../../assets/wallpaperflare.com_wallpaper (3).jpg";

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

const Artists: React.FC<any> = () => {
    return <ArtistWrapper artists = {artists} />;
};
export default Artists;