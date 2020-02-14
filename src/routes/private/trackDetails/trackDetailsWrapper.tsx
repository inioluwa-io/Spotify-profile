import React from "react";
import SEO from "../../../components/seo";
import "../../../styles/pages/trackDetail.scss";

const TrackAlbum: React.FC<any> = ({ album, year }) => {
  if (album)
    return (
      <span>
        {album} &#8231; {year}
      </span>
    );
  return <span> {year} </span>;
};

const TrackDetailsWrapper: React.FC<any> = ({
  albumArt,
  title,
  artist,
  year,
  album
}) => {
  return (
    <main className="page-container" id="track_details">
      <SEO title="Spotify profile" description="" />
      <div className="container">
        <div className="profile">
          <div className="image">
            <img src={albumArt} alt="profile" />
          </div>
          <div className="profile_details">
            <h2>{title}</h2>
            <p>{artist}</p>
            <TrackAlbum year={year} album={album} />
            <a
              href={`https://open.spotify.com/track/`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-rounded btn-md btn-primary"
            >
              Play on Spotify
            </a>
          </div>
        </div>
        <aside className=""></aside>
      </div>
    </main>
  );
};
export default TrackDetailsWrapper;
