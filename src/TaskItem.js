import "./TaskItem.css";

const TaskItem = ({ task, deleteTask, toggleReminder }) => {
  const onDeleteHandler = (id) => {
    deleteTask(id);
  };

  const onToggleReminder = (id) => {
    toggleReminder(id);
  };

  return (
    <article className={task.reminder ? "reminder task-item" : "task-item"}>
      <div className="content">
        <div>
          <h5 className="task-title">{task.task}</h5>

          <p className="task-date">{task.date}</p>
        </div>

        <div className="task-control">
          <i
            className="fa-solid fa-trash-can"
            onClick={() => onDeleteHandler(task.id)}
          ></i>

          <i
            className="fa-solid fa-pen"
            onClick={() => onToggleReminder(task.id)}
          ></i>
        </div>
      </div>
    </article>
  );
};

export default TaskItem;
