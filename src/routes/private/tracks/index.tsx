import React, { useState, useEffect } from "react";
import {
  getTopTracksShort,
  getTopTracksMedium,
  getTopTracksLong
} from "../../../components/spotify";
import Spinner from "../../../components/spinner";
import TracksWrapper from "./tracksWrapper";

const Tracks: React.FC<any> = () => {
  const [TopTracksShort, setTopTracksShort] = useState();

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const { data } = await getTopTracksShort();
        setTopTracksShort({ data });
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

  if (!TopTracksShort) {
    return <Spinner />;
  }
  const { data } = TopTracksShort;
  console.log(data)
  return <TracksWrapper tracks={data.items} />;
};
export default Tracks;
