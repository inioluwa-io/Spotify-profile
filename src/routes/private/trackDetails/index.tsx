import React from "react";
import TrackDetailsWrapper from "./trackDetailsWrapper";
import dp1 from "../../../assets/249921.jpg";
import dp4 from "../../../assets/inscription_motivation_dark_background_texture_119598_3840x2400.jpg";

const track = {
  title: "Lucid Dreams",
  album: "Goodbye & Good Riddance",
  artist: "Juice WRLD",
  albumArt: dp1,
  year: "2018"
};
const TrackDetails: React.FC<any> = () => {
  return (
    <TrackDetailsWrapper
      title={track.title}
      album={track.album}
      year={track.year}
      artist={track.artist}
      albumArt={track.albumArt}
    />
  );
};
export default TrackDetails;
