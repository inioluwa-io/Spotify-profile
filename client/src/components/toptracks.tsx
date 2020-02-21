import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import Track from "./track";

interface ITopTracks {
  path: string;
  title?: string;
  tracks: [any];
}

const TopTracks: React.FC<any> = ({ path, title, tracks }: ITopTracks) => {
  return (
    <section id ="tracks">
      <Link to={`${path}`} className="title">
        {title}
        <Icon path={mdiChevronRight} size={1.4} color="#fff" aria-label="go" />
      </Link>
      <Track tracks={tracks} />
    </section>
  );
};
export default TopTracks;
