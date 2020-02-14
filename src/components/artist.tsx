import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@mdi/react";
import { mdiInformation } from "@mdi/js";
import "../styles/components/artists.scss";

const Artist: React.FC<any> = ({ artists }) => {
  return (
    <ul className="artists">
      {artists.map((artist: any, index: number) => (
        <li key={index}>
          <Link to="artist/">
            <div className="row">
              <div className="image">
                <img src={artist.albumArt} alt="" />
                <div className="info">
                  <Icon
                    path={mdiInformation}
                    size={1.5}
                    color="#fff"
                    aria-label="info"
                  />
                </div>
              </div>
              <div className="column artist_details ">
                <p>{artist.name}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Artist;
