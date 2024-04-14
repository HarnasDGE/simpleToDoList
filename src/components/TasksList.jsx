import { Button } from "./Button";
import { Task } from "./Task";

export const TasksList = ({ myToDoList, setMyToDoList }) => {
  const deleteTask = (key) => {
    const newList = myToDoList.filter((task, index) => index !== Number(key));
    setMyToDoList(newList);
  };

  const toggleIsDone = (index) => {
    const task = myToDoList.find((task, key) => key === Number(index));
    const isDone = task.isDone;
    const newTask = { ...task, isDone: !isDone };
    const newList = myToDoList.filter((task, key) => key !== Number(index));
    newList.splice(index, 0, newTask);
    setMyToDoList(newList);
  };

  const removeAllTasks = () => {
    if (myToDoList.find((task) => task.isDone === false) === undefined)
      setMyToDoList([]);
  };

  return (
    <>
      {myToDoList.length === 0 ? (
        <div>Nie masz jeszcze żadnych zadań.</div>
      ) : (
        <ul>
          {myToDoList.map((task, index) => (
            <li key={`task${index}`}>
              <Task
                index={index}
                task={task}
                deleteTask={deleteTask}
                toggleIsDone={toggleIsDone}
              />
            </li>
          ))}
        </ul>
      )}
      {myToDoList.find((task) => task.isDone === false) === undefined &&
      myToDoList.length > 0 ? (
        <div className="allTasksFinished">
          Wszystkie zadania skończone?
          <Button onClick={removeAllTasks} text="Wyczyść" />
        </div>
      ) : null}
    </>
  );
};
