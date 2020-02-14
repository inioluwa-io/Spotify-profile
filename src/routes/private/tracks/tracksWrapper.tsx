import React, { useState } from "react";
import "../../../styles/pages/tracks.scss";
import SEO from "../../../components/seo";
import Tab from "../../../components/tabs";
import Track from "../../../components/track";

interface ITracks {
  tracks: [any];
}

interface IToggleTabs {
  selectedTab: number;
  data: [any];
}
const TracksWrapper: React.FC<any> = ({ tracks }: ITracks) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const ToggleTabs: React.FC<any> = () => {
    console.log(selectedTab);
    if (selectedTab === 0) return <Track tracks={tracks} />;
    else return <></>;
  };

  return (
    <main className="page-container" id="track">
      <SEO title="Top tracks | Spotify profile" description="" />
      <div className="container">
        <header>
          <h1>Top Tracks</h1>
          <Tab
            tabs={["All Time", "Last 4 weeks", "Last 6 months"]}
            getSelectedTab={(index: number) => {
              setSelectedTab(index);
              console.log(selectedTab);
            }}
          />
        </header>
        <ToggleTabs selectedTab={selectedTab} data={tracks} />
      </div>
    </main>
  );
};
export default TracksWrapper;
