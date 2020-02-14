import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@mdi/react";
import { mdiInformation } from "@mdi/js";
import "../styles/components/tracks.scss";

const TrackAlbum: React.FC<any> = ({ album, artist }) => {
  if (artist)
    return (
      <span>
        {artist} &#8231; {album}
      </span>
    );
  return <span> {artist} </span>;
};

const Track: React.FC<any> = ({ tracks }) => {
  return (
    <ul className="tracks">
      {tracks.map((track: any, index: number) => (
        <li key={index}>
          <Link to="track/">
            <div className="row">
              <div className="image">
                <img src={track.albumArt} alt="" />
                <div className="info">
                  <Icon
                    path={mdiInformation}
                    size={1.5}
                    color="#fff"
                    aria-label="info"
                  />
                </div>
              </div>
              <div className="column track_details ">
                <p>{track.title}</p>
                <TrackAlbum artist={track.artist} album={track.album} />
              </div>
              <div className="column track_details time">
                <span className="">{track.time}</span>
                <span></span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Track;
