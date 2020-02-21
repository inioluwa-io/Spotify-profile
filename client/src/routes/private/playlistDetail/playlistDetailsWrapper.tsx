import React from "react";
import SEO from "../../../components/seo";
import "../../../styles/pages/playlistDetail.scss";
import Track from "../../../components/track";

const PlaylistDetailsWrapper: React.FC<any> = ({
  author,
  name,
  albumArt,
  tracks
}) => {
  return (
    <main className="page-container" id="playlist_details">
      <SEO title="Spotify profile" description="" />
      <div className="container">
        <div className="profile">
          <div className="image">
            <img src={albumArt} alt="profile" />
          </div>
          <div className="profile_details">
            <h2>{name}</h2>
            <span> By {author}</span>
            <p>{tracks.total} Tracks</p>
          </div>
        </div>
        <aside className="">
          <Track tracks = {tracks.items} target = 'track'/>
        </aside>
      </div>
    </main>
  );
};
export default PlaylistDetailsWrapper;
