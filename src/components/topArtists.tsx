import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import Artist from "./artist";

interface ITopArtists {
  path: string;
  title?: string;
  artists: [any];
}

const TopArtists: React.FC<any> = ({ path, title, artists }: ITopArtists) => {
  return (
    <section id ="artists">
      <Link to={`${path}`} className="title">
        {title}
        <Icon path={mdiChevronRight} size={1.4} color="#fff" aria-label="go" />
      </Link>
      <Artist artists={artists} />
    </section>
  );
};
export default TopArtists;
