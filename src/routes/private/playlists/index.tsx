import React, { useState, useEffect } from "react";
import { getPlaylists } from "../../../components/spotify";
import PlaylistsWrapper from "./playlistsWrapper";
import Spinner from "../../../components/spinner";

const Playlists: React.FC<any> = () => {
  const [playlists, setPlaylists] = useState();

  //fetch Top track short
  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const { data } = await getPlaylists();
        setPlaylists({ data });
        console.log(data);
      } catch (e) {
        console.warn(e + "error");
      }
    };

    let current = true;
    if (current) fetchTrack();
    return () => {
      current = false;
    };
  }, []);

  if (!playlists) {
    return <Spinner />;
  }

  const { data } = playlists;

  return <PlaylistsWrapper playlists={data.items} />;
};
export default Playlists;
