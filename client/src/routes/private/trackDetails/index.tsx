import React, { useEffect, useState } from "react";
import TrackDetailsWrapper from "./trackDetailsWrapper";
import { getTrackInfo } from "../../../components/spotify";
import Spinner from "../../../components/spinner";

const TrackDetails: React.FC<any> = ({ match }) => {
  const [trackDetails, setTrackDetails] = useState();

  useEffect(() => {
    const fetchTrack = async () => {
      const trackId = match.params.id;
      try {
        const { track, audioAnalysis, audioFeatures } = await getTrackInfo(
          trackId
        );
        setTrackDetails({ track, audioAnalysis, audioFeatures });
      } catch (e) {
        console.warn(e + "error");
      }
    };
    
    let current = true;
    if (current) fetchTrack();
    return () => {
      current = false;
    };
  }, [match.params.id]);

  if (!trackDetails) {
    return <Spinner />;
  }
  
  const { track, audioAnalysis, audioFeatures } = trackDetails;

  return (
    <TrackDetailsWrapper
      name={track.name}
      album={track.album}
      year={track.year}
      artist={track.artists}
    />
  );
};
export default TrackDetails;
