import { useNavigate } from "react-router-dom";
import NewStationForm from "../components/meetings/NewStationForm";

const NewStation = () => {
  const addStationHandler = (stationData) => {
    fetch(
      `https://train-stations-73469-default-rtdb.firebaseio.com/stations.json`,
      {
        method: "POST",
        body: JSON.stringify(stationData),
        headers: { "Content-Type": "application/json" },
      }
    );
  };

  return (
    <section>
      <h1>Add New Station</h1>
      <NewStationForm onAddStation={addStationHandler} />
    </section>
  );
};

export default NewStation;
