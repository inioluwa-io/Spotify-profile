import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout/grid.scss";
import "../styles/components/playlist.scss";

const Playlist: React.FC<any> = ({ playlists }) => {
  return (
    <ul className="playlist grid grid-20 grid-col-5">
      {playlists.map((playlist: any, index: number) => (
        <li key={index}>
          <Link to={`playlist/${index}`}>
            <div className="column">
              <div className="image">
                <img src={playlist.albumArt} alt="" />
              </div>
              <div className="playlist_details ">
                <p>{playlist.name}</p>
                <span>{playlist.no_of_tracks} Tracks</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Playlist;
