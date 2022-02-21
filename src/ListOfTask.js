import "./ListOfTask.css";
import TaskItem from "./TaskItem";

const ListOfTask = ({ tasks, deleteTask, toggleReminder }) => {
  return (
    <div>
      {/* loading */}
      {!tasks.length && <div className="loading">Loading!!</div>}

      {/* finish loading */}
      {tasks.length && (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <TaskItem
                  task={task}
                  deleteTask={deleteTask}
                  toggleReminder={toggleReminder}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ListOfTask;
