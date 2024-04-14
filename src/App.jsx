import "./App.css";
import { toDoList } from "./constans/tasksList";
import { useState } from "react";
import { AddFormular } from "./components/AddFormular";
import { TasksList } from "./components/TasksList";

function App() {
  const [myToDoList, setMyToDoList] = useState(toDoList);
  return (
    <>
      <h1>Lista Zadań</h1>
      <TasksList setMyToDoList={setMyToDoList} myToDoList={myToDoList} />
      <AddFormular myToDoList={myToDoList} setMyToDoList={setMyToDoList} />
    </>
  );
}

export default App;
