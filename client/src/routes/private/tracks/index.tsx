import React, { useState, useEffect } from "react";
import {
  getTopTracksShort,
  getTopTracksMedium,
  getTopTracksLong
} from "../../../components/spotify";
import Spinner from "../../../components/spinner";
import TracksWrapper from "./tracksWrapper";

const Tracks: React.FC<any> = () => {
  const [topTracksShort, setTopTracksShort] = useState();
  const [topTracksMedium, setTopTracksMedium] = useState();
  const [topTracksLong, setTopTracksLong] = useState();

  //fetch Top track short
  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const { data } = await getTopTracksShort();
        setTopTracksShort({ data });
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

  //fetch Top track Medium
  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const { data } = await getTopTracksMedium();
        setTopTracksMedium({ data });
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

  //fetch Top track Long
  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const { data } = await getTopTracksLong();
        setTopTracksLong({ data });
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

  if (!topTracksShort || !topTracksMedium || !topTracksLong) {
    return <Spinner />;
  }

  return (
    <TracksWrapper
      tracksShort={topTracksShort.data.items}
      tracksMedium={topTracksMedium.data.items}
      tracksLong={topTracksLong.data.items}
    />
  );
};
export default Tracks;
