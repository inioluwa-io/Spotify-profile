import React, { useState, useEffect } from "react";
import PlaylistDetailsWrapper from "./playlistDetailsWrapper";
import { getPlaylist } from "../../../components/spotify";
import Spinner from "../../../components/spinner";

const PlaylistDetails: React.FC<any> = ({ match }) => {
  const [playlist, setPlaylist] = useState();

  //fetch Top track short
  useEffect(() => {
    const playlistId = match.params.id;
    const fetchPlaylist = async () => {
      try {
        const { data } = await getPlaylist(playlistId);
        setPlaylist({ data });
        console.log(data);
      } catch (e) {
        console.warn(e + "error");
      }
    };

    let current = true;
    if (current) fetchPlaylist();
    return () => {
      current = false;
    };
  }, []);

  if (!playlist) {
    return <Spinner />;
  }
  const { data } = playlist;

  return (
    <PlaylistDetailsWrapper
      name={data.name}
      tracks={data.tracks}
      albumArt={data.images[0].url}
      author={data.owner.display_name}
    />
  );
};
export default PlaylistDetails;
