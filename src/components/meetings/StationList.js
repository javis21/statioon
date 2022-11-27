import classes from "./StationList.module.css";
import StationItem from "./StationItem";

const StationList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetings.map((meeting) => (
        <StationItem
          key={meeting.id}
          id={meeting.id}
          image={meeting.image}
          title={meeting.title}
          address={meeting.address}
          description={meeting.description}
        />
      ))}
    </ul>
  );
};
export default StationList;
