import React, { useEffect, useState } from "react";
import ArtistWrapper from "./artistsWrapper";
import {
  getTopArtistsShort,
  getTopArtistsMedium,
  getTopArtistsLong
} from "../../../components/spotify";
import Spinner from "../../../components/spinner";

const Artists: React.FC<any> = () => {
  const [topArtistsShort, setTopArtistsShort] = useState();
  const [topArtistsMedium, setTopArtistsMedium] = useState();
  const [topArtistsLong, setTopArtistsLong] = useState();

  //fetch Top artist short
  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const { data } = await getTopArtistsShort();
        setTopArtistsShort({ data });
      } catch (e) {
        console.warn(e + "error");
      }
    };

    let current = true;
    if (current) fetchArtist();
    return () => {
      current = false;
    };
  }, []);

  //fetch Top artist medium
  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const { data } = await getTopArtistsMedium();
        setTopArtistsMedium({ data });
      } catch (e) {
        console.warn(e + "error");
      }
    };

    let current = true;
    if (current) fetchArtist();
    return () => {
      current = false;
    };
  }, []);

  //fetch Top artist long
  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const { data } = await getTopArtistsLong();
        setTopArtistsLong({ data });
      } catch (e) {
        console.warn(e + "error");
      }
    };

    let current = true;
    if (current) fetchArtist();
    return () => {
      current = false;
    };
  }, []);

  if (!topArtistsShort || (!topArtistsMedium) || (!topArtistsLong )) {
    return <Spinner />;
  }

  return (
    <ArtistWrapper
      artistsShort={topArtistsShort.data.items}
      artistsMedium={topArtistsMedium.data.items}
      artistsLong={topArtistsLong.data.items}
    />
  );
};
export default Artists;
