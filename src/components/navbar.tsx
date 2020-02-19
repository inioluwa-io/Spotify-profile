import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@mdi/react";
import {
  mdiSpotify,
  mdiHome,
  mdiMicrophone,
  mdiMusic,
  mdiPlaylistMusic,
  mdiLogout
} from "@mdi/js";
import "../styles/components/navbar.scss";

const Navbar: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <header id="nav_header" role="navigation">
        <button
          onClick={() => {
            window.localStorage.clear();
            window.location.pathname = "/";
          }}
        >
          <Icon
            path={mdiLogout}
            size={1}
            color="#fff"
            aria-label="spotify profile"
          />
        </button>
      </header>
      <nav>
        <div id="logo">
          <Icon
            path={mdiSpotify}
            size={2}
            color="#00dd4a"
            aria-label="spotify profile"
          />
          <div className="text">
            <p>Spotify</p>
            <span>profile</span>
          </div>
        </div>
        <ul>
          <li>
            <NavLink exact to={"/"} activeClassName="active">
              <Icon path={mdiHome} size={1} color="#fff" aria-label="home" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/tracks"} activeClassName="active">
              <Icon path={mdiMusic} size={1} color="#fff" aria-label="tracks" />
              <span>Top Tracks</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/artists"} activeClassName="active">
              <Icon
                path={mdiMicrophone}
                size={1}
                color="#fff"
                aria-label="artists"
              />
              <span>Top Artists</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/playlists"} activeClassName="active">
              <Icon
                path={mdiPlaylistMusic}
                size={1}
                color="#fff"
                aria-label="playlists"
              />
              <span>Playlists</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
