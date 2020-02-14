import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Loader from "../components/loader";
import NotFound from "./public/notfound";
import Home from "./private/home";
import Tracks from "./private/tracks";
import Login from "./public/login";
import Navbar from "../components/navbar";

// Gets user authenticated status
const checkAuth = (): boolean => {
  return window.localStorage.getItem("loginToken") ? true : false;
};

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
      checkAuth() ? (
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
      checkAuth() ? (
        <Redirect to={{ pathname: to }} />
      ) : (
        <Component {...props} />
      )
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
    }, 3500);

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div id="__container">
        {checkAuth() && <Navbar />}
        <Switch>
          <AuthRoute exact path="/" component={Home} />
          <AuthRoute path="/artists" component={Home} />
          <AuthRoute path="/tracks" component={Tracks} />
          <AuthRoute path="/ratings" component={Home} />
          <AuthRoute path="/playlists" component={Home} />
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
