import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout/grid.scss";
import "../styles/components/playlist.scss";

const Playlist: React.FC<any> = ({ playlists }) => {
  return (
    <ul className="playlist grid grid-20 grid-col-5">
      {playlists.map((playlist: any, index: number) => (
        <li key={index}>
          <Link to={`playlist/${playlist.id}`}>
            <div className="column">
              <div className="image">
                <img src={playlist.images[0].url} alt="" />
              </div>
              <div className="playlist_details ">
                <p>{playlist.name}</p>
                <span>{playlist.tracks.total} Tracks</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Playlist;
