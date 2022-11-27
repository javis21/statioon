import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewStationForm.module.css";



const NewStationForm = (props) => {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const stationData = {
      name: enteredName,
      image: enteredImage,
      address: enteredAddress,
      descritpion: enteredDescription,
    };
    props.onAddStation(stationData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Station Name</label>
          <input type="text" required id="name" ref={nameInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Station Image</label>
          <input type="url" required id="image" ref={imageInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Station Description</label>
          <textarea
            required
            id="description"
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.action}> </div>
        <button>Add Station</button>
      </form>
    </Card>
  );
};

export default NewStationForm;
