import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout/grid.scss";
import "../styles/components/artists.scss";

const Artist: React.FC<any> = ({ artists }) => {
  return (
    <ul className="artists grid grid-20 grid-col-5">
      {artists.map((artist: any, index: number) => (
        <li key={index}>
          <Link to="artist/">
            <div className="column">
              <div className="image">
                <img src={artist.albumArt} alt="" />
              </div>
              <div className="artist_details ">
                <p>{artist.name}</p>
                <span>Artist</span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Artist;
