import { Button } from "./Button";

export const Task = ({ task, index, deleteTask, toggleIsDone }) => {
  const { title, desc, date, isDone } = task;

  const toggleTaskDelete = (e) => {
    const index = e.target.value;
    deleteTask(index);
  };

  const toggleIsDoneButton = (e) => {
    const index = e.target.value;
    toggleIsDone(index);
  };

  return (
    <>
      <div className={`task-details ${isDone && "disable"}`}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>{date}</p>
      </div>
      <div className="task-buttons">
        <Button
          onClick={toggleTaskDelete}
          value={index}
          text="Usuń"
          fill={false}
        />
        <Button
          onClick={toggleIsDoneButton}
          value={index}
          text={isDone ? "Wznów" : "Zakończ"}
        />
      </div>
    </>
  );
};
