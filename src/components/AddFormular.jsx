import { useState } from "react";
import { Button } from "./Button";
import { OptionFormular } from "./OptionFormular";

export const AddFormular = ({ setMyToDoList, myToDoList }) => {
  const [titleTask, setTitleTask] = useState("");
  const [descTask, setDescTask] = useState("");
  const [dateTask, setDateTask] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [alertArr, setAlertArr] = useState([]);

  const setAlert = (name, text) => {
    const newAlert = {
      name: name,
      text: text,
    };
    setAlertArr((prevState) => [...prevState, newAlert]);
  };

  const clearAlert = () => {
    setAlertArr([]);
  };

  const addTask = () => {
    clearAlert();
    const newTask = {
      title: titleTask,
      desc: descTask,
      date: dateTask,
      isDone: false,
    };
    if (!titleTask) {
      setAlert("titleTask", "Wpisz pole tytułu");
      return;
    }
    setMyToDoList([...myToDoList, newTask]);
  };

  const clearFormular = () => {
    clearAlert();
    setTitleTask("");
    setDescTask("");
    setDateTask(new Date().toISOString().substring(0, 10));
  };

  const alertTitle = alertArr.find((alert) => alert.name === "titleTask");
  return (
    <>
      <div className="addTask-container">
        <OptionFormular
          onChange={setTitleTask}
          value={titleTask}
          title="Tytuł"
          alert={alertTitle && alertTitle.text}
        />
        <OptionFormular onChange={setDescTask} value={descTask} title="Opis" />
        <OptionFormular
          onChange={setDateTask}
          value={dateTask}
          title="Data"
          type="date"
        />
        <Button text="Dodaj zadanie" onClick={addTask} />
        <Button text="Wyczyść formularz" onClick={clearFormular} />
      </div>
    </>
  );
};
