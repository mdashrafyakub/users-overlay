import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [userInput, setUserInput] = useState({ username: "", age: "" });
  function handleChange(e) {
    setUserInput((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (userInput.username.trim() === 0 || userInput.age.trim() === 0) {
      return;
    }
    if (+userInput.age < 1) {
      return;
    }
    props.onAddUser(userInput);
    setUserInput({ username: "", age: "" });
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usename</label>
        <input
          id="username"
          name="username"
          onChange={handleChange}
          value={userInput.username}
          type="text"
        ></input>

        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          value={userInput.age}
          onChange={handleChange}
          type="number"
        ></input>

        <Button type="Submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
