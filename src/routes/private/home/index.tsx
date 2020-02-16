import React, { useEffect, useState } from "react";
import dp from "../../../assets/brooks-leibee-562087-unsplash.jpg";
import HomeWrapper from "./homeWrapper";
import { getUserInfo } from "../../../components/spotify";
import Spinner from "../../../components/spinner";

const Home: React.FC<any> = () => {
  const [userInfo, setUserInfo]: any = useState();

  const fetchUser = async () => {
    try {
      const {
        user,
        followedArtists,
        playlists,
        topArtists,
        topTracks
      } = await getUserInfo();
      setUserInfo({ user, followedArtists, playlists, topArtists, topTracks });
    } catch (e) {
      console.warn(e + "error");
    }
  };

  useEffect(() => {
    let current = true;
    if (current) fetchUser();
    return () => {
      current = false;
    };
  }, []);

  if (!userInfo) {
    return <Spinner />;
  }

  const { user, followedArtists, playlists, topArtists, topTracks } = userInfo;
  console.log(user);
  return (
    <HomeWrapper
      profileImage={user.images}
      playlists={playlists.items.length}
      followers={user.followers.total}
      following={followedArtists.artists.items.length}
      name={user.display_name}
      tracks={topTracks.items}
      artists={topArtists.items}
    />
  );
};
export default Home;
