import React, { useState } from "react";
import "../../../styles/pages/tracks.scss";
import SEO from "../../../components/seo";
import Tab from "../../../components/tabs";
import Track from "../../../components/track";

interface ITracks {
  tracksShort: [any];
  tracksMedium: [any];
  tracksLong: [any];
}

interface IToggleTabs {
  selectedTab: number;
  data: [any];
}
const TracksWrapper: React.FC<any> = ({
  tracksShort,
  tracksMedium,
  tracksLong
}: ITracks) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const ToggleTabs: React.FC<any> = () => {
    if (selectedTab === 0) return <Track tracks={tracksLong} />;
    else if (selectedTab === 1) return <Track tracks={tracksShort} />;
    else if (selectedTab === 2) return <Track tracks={tracksMedium} />;
    else return <Track tracks={tracksLong} />;
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
        <ToggleTabs selectedTab={selectedTab} />
      </div>
    </main>
  );
};
export default TracksWrapper;
