import React from "react";
import PlaylistsWrapper from "./playlistsWrapper";
import dp3 from "../../../assets/headphones_camera_retro_122094_3840x2400.jpg";
import dp4 from "../../../assets/inscription_motivation_dark_background_texture_119598_3840x2400.jpg";
import dp5 from "../../../assets/wallpaperflare.com_wallpaper (3).jpg";

const playlists = [
  {
    name: "Dream",
    albumArt: dp5,
    no_of_tracks:'16'
  },
  {
    name: "Workout",
    albumArt: dp3,
    no_of_tracks:'11'
  }
];

const Playlists: React.FC<any> = () => {
    return <PlaylistsWrapper playlists = {playlists} />;
};
export default Playlists;