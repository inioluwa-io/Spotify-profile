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
  playlists: string;
  artists: [any];
  tracks: [any];
}

const ProfilePicture: React.FC<any> = ({ image }) =>
  image.length ? (
    <div className="image">
      <img src={image} alt="profile" />
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
  tracks,
  artists,
  ...props
}: IHomeWrapper) => {
  return (
    <main className="page-container" id="home">
      <SEO title="Spotify profile" description="" />
      <div className="container">
        <div className="profile">
          <ProfilePicture image={profileImage} />
          <div className="profile_details">
            <h2>Inioluwa Sogelola</h2>
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
          <TopArtists
            artists={artists}
            title="Top Artists of All Time"
            path="/artists"
          />
        </aside>
      </div>
    </main>
  );
};
export default HomeWrapper;