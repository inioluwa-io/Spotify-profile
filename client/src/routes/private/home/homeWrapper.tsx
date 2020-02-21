import React from "react";
import SEO from "../../../components/seo";
import { Icon } from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import "../../../styles/pages/home.scss";
import TopTracks from "../../../components/toptracks";
import TopArtists from "../../../components/topArtists";

interface IHomeWrapper {
  profileImage: any;
  followers: string;
  following: string;
  name: string;
  playlists: string;
  artists: any;
  tracks: [any];
}

const ProfilePicture: React.FC<any> = ({ images }) =>
  images.length ? (
    <div className="image">
      <img src={images[0].url} alt="avatar" />
    </div>
  ) : (
    <div className="image border">
      <Icon path={mdiAccount} size={4} color="#fff" aria-label="home" />
    </div>
  );

const HomeWrapper: React.FC<any> = ({
  profileImage = "",
  following,
  followers,
  playlists,
  name,
  tracks,
  artists,
  ...props
}: IHomeWrapper) => {
  return (
    <main className="page-container" id="home">
      <SEO title="Spotify profile" description="" />
      <div className="container">
        <div className="profile">
          <ProfilePicture images={profileImage} />
          <div className="profile_details">
            <h2>{name}</h2>
            <ul>
              <li>
                <span>{followers}</span>
                <p>Followers</p>
              </li>
              <li>
                <span>{following}</span>
                <p>Following</p>
              </li>
              <li>
                <span>{playlists}</span>
                <p>Playlists</p>
              </li>
            </ul>
          </div>
        </div>
        <aside className="">
          <TopTracks
            tracks={tracks}
            title="Top Tracks of All Time"
            path="/tracks"
          />
          {artists.total && (
            <TopArtists
              artists={artists}
              title="Top Artists of All Time"
              path="/artists"
            />
          )}
        </aside>
      </div>
    </main>
  );
};
export default HomeWrapper;
