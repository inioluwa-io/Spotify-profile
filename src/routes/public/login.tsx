import React from "react";
import { Redirect } from "react-router-dom";
import SEO from "../../components/seo";

const Login: React.FC<any> = () => {
  const randomToken = (length: number = 12): string => {
    let character: string =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let characterLength: number = character.length;
    let result: string = "";
    for (let i = 0; i < length; i++) {
      result += character[Math.floor(Math.random() * (characterLength - 1))];
    }
    return result;
  };

  const login = async () => {
    const token = randomToken(31);
    await window.localStorage.setItem("loginToken", token);
    window.location.pathname = "/";
    return <Redirect to={{ pathname: "/" }} />;
  };

  return (
    <section id="login" className="page-container">
      <SEO title="Log in | Spotify profile " description="Log in to your spotidy profile" />
      <div id="logo">
        <p>Spotify</p>
        <span>profile</span>
      </div>
      <button className="btn btn-rounded btn-lg btn-primary" onClick={login}>
        Log in to Spotify
      </button>
    </section>
  );
};
export default Login;
