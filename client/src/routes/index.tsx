import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Loader from "../components/loader";
import NotFound from "./public/notfound";
import Home from "./private/home";
import Tracks from "./private/tracks";
import Login from "./public/login";
import Navbar from "../components/navbar";
import Artists from "./private/artists";
import Playlists from "./private/playlists";
import TrackDetails from "./private/trackDetails";
import PlaylistDetails from "./private/playlistDetail";
import { token } from "../components/spotify";

// Gets user authenticated status
// const checkAuth = (): boolean => {
//   return window.localStorage.getItem("loginToken") ? true : false;
// };

interface IComponent {
  component: React.FC<any>;
}

// Redirect route to login if authentication failed adn if true continue
const AuthRoute: React.FC<any> = ({
  component: Component,
  ...rest
}: IComponent) => (
  <Route
    {...rest}
    render={props =>
      token ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

// Manually Redirect route after authentication
const AuthRouteRedirect: React.FC<any> = ({
  to,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      token ? <Redirect to={{ pathname: to }} /> : <Component {...props} />
    }
  />
);

const Routes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Animate loader opacity to 0
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      const html: any = document.querySelector("html");
      html.style.overflow = "visible";
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(loaderTimeout);
  }, []);
  
  return (
    <>
      {isLoading && <Loader />}
      <div id="__container">
        {token && <Navbar />}
        <Switch>
          <AuthRoute exact path="/" component={Home} />
          <AuthRoute path="/artists" component={Artists} />
          <AuthRoute path="/tracks" component={Tracks} />
          <AuthRoute path="/track/:id" component={TrackDetails} />
          <AuthRoute path="/playlists" component={Playlists} />
          <AuthRoute path="/playlist/:id" component={PlaylistDetails} />
          <AuthRouteRedirect to="/" path="/login" component={Login} />

          {/* Private routes */}
          <AuthRoute path="/settings" component={Home} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </div>
      <Switch>
        <AuthRouteRedirect to="/" path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default Routes;
