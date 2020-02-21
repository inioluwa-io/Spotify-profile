import React, { useRef } from "react";
import "../styles/components/loader.scss";

const Loader: React.FC<any> = () => {
  const loader: any = useRef(null);

  setTimeout(() => {
    loader.current.style.opacity = "0";
  }, 3000);

  return (
    <section ref={loader} id="loader" className="page-container">
      {/* <Icon path={mdi.mdiSpotify} color="#00dd4a" size={1} /> */}
      <div id="logo">
        <p>Spotify</p>
        <span>profile</span>
      </div>
    </section>
  );
};
export default Loader;
