import React, { useState, useEffect } from "react";
import "../styles/components/tabs.scss";

interface ITab {
  getSelectedTab: Function;
  tabs: [string];
}

const Tab: React.FC<any> = ({ getSelectedTab, tabs }: ITab) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const selectTab = (index: number): void => {
    setSelectedTab(index);
    getSelectedTab(index);
  };

  return (
    <div id="tabs">
      {tabs.map((item, index) => (
        <button
          key={index}
          className={
            selectedTab === index
              ? "tabs btn selected"
              : " btn tabs"
          }
          onClick={() => selectTab(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default Tab;
