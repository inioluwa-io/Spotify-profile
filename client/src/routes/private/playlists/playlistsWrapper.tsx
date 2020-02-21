import React from "react";
import "../../../styles/pages/playlists.scss";
import SEO from "../../../components/seo";
import Playlist from "../../../components/playlist";

interface IPlaylists {
  playlists: [any];
}

const PlaylistsWrapper: React.FC<any> = ({ playlists }: IPlaylists) => {
  return (
    <main className="page-container" id="playlists">
      <SEO title="Playlists | Spotify profile" description="" />
      <div className="container">
        <header>
          <h1>Playlists</h1>
        </header>
        <Playlist playlists={playlists} />
      </div>
    </main>
  );
};
export default PlaylistsWrapper;
