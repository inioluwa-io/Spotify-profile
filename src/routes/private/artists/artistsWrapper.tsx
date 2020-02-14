import React, { useState } from "react";
import "../../../styles/pages/artist.scss";
import SEO from "../../../components/seo";
import Tab from "../../../components/tabs";
import Artist from "../../../components/artist";

interface IArtist {
  artists: [any];
}

interface IToggleTabs {
  selectedTab: number;
  data: [any];
}
const ArtistWrapper: React.FC<any> = ({ artists }: IArtist) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const ToggleTabs: React.FC<any> = () => {
    console.log(selectedTab);
    if (selectedTab === 0) return <Artist artists={artists} />;
    else if (selectedTab === 1) return <Artist artists={artists} />;
    else if (selectedTab === 2) return <Artist artists={artists} />;
    else return <></>;
  };

  return (
    <main className="page-container" id="artist">
      <SEO title="Top tracks | Spotify profile" description="" />
      <div className="container">
        <header>
          <h1>Top Artists</h1>
          <Tab
            tabs={["All Time", "Last 4 weeks", "Last 6 months"]}
            getSelectedTab={(index: number) => {
              setSelectedTab(index);
              console.log(selectedTab);
            }}
          />
        </header>
        <ToggleTabs selectedTab={selectedTab} />
      </div>
    </main>
  );
};
export default ArtistWrapper;
