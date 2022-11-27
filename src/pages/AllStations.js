import { useState, useEffect } from "react";
import StationList from "../components/meetings/StationList";

const AllStations = () => {
  const [loading, setLoading] = useState(true);
  const [loadedStations, setLoadedStations] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://train-stations-73469-default-rtdb.firebaseio.com/stations.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const stationsArray = [];
        for (const key in data) {
          const stationToArray = { id: key, ...data[key] };
          stationsArray.push(stationToArray);
        }

        setLoading(false);
        setLoadedStations(stationsArray);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Stations</h1>
      <StationList meetings={loadedStations}></StationList>
    </section>
  );
};
export default AllStations;
