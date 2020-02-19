import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@mdi/react";
import { mdiInformation } from "@mdi/js";
import "../styles/components/tracks.scss";
import { formatDuration } from "../components/utils";

const TrackAlbum: React.FC<any> = ({ album, artist }) => {
  if (album)
    return (
      <span>
        {artist.map(({ name }: any, i: number) => (
          <span key={i}>
            {name}
            {artist.length > 0 && i === artist.length - 1 ? " " : ", "}
          </span>
        ))}
        &#8231; {album.name}
      </span>
    );
  return (
    <span>
      {artist.map(({ name }: any, i: number) => (
        <span key={i}>{name}</span>
      ))}
    </span>
  );
};

const Track: React.FC<any> = ({ tracks, target = null }) => {
  return (
    <ul className="tracks">
      {tracks.map((track: any, index: number) => {
        if (target) {
          track = track[target];
        }
        return (
          <li key={index}>
            <Link to={`/track/${track.id}`}>
              <div className="row">
                <div className="image">
                  <img src={track.album.images[2].url} alt="Album Artwork" />
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
                  <p>{track.name}</p>
                  <TrackAlbum artist={track.artists} album={track.album} />
                </div>
                <div className="column track_details time">
                  <span className="">{formatDuration(track.duration_ms)}</span>
                  <span></span>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Track;
