import React from "react";
import SEO from "../../../components/seo";
import "../../../styles/pages/trackDetail.scss";
import { getYear } from "../../../components/utils";

const TrackAlbum: React.FC<any> = ({ album, year }) => {
  if (album)
    return (
      <span style={{ display: "block" }}>
        {album.name} &#8231; {getYear(album.release_date)}
      </span>
    );
  return <span style={{ display: "block" }}> {year} </span>;
};

const TrackDetailsWrapper: React.FC<any> = ({ name, artist, year, album }) => {
  return (
    <main className="page-container" id="track_details">
      <SEO title="Spotify profile" description="" />
      <div className="container">
        <div className="profile">
          <div className="image">
            <img src={album.images[1].url} alt="Track Artwork" />
          </div>
          <div className="profile_details">
            <h2>{name}</h2>
            <p>
              {artist.map(({ name }: any, i: number) => (
                <span key={i}>
                  {name}
                  {artist.length > 0 && i === artist.length - 1 ? " " : ", "}
                </span>
              ))}
            </p>
            <TrackAlbum year={year} album={album} />
            <a
              href={`${album.external_urls.spotify}`}
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
