import { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import Header from "./Header";
import ListOfTask from "./ListOfTask";

const App = () => {
  // App component states
  const [tasks, setTasks] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

  // useEffect hook for date fetching
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/tasks");

      if (!res.ok) {
        console.log("Something went wrong!");
      }

      const tasks = await res.json();

      setTasks(tasks);
    };

    fetchData();
  }, []);

  //Toggle handler
  const onToggle = () => {
    setIsToggle(!isToggle);
  };

  // Create new task
  const createNewTask = async (task) => {
    // POST request
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    // Recieve POST request payload
    const payload = await res.json();

    // Add it to State
    setTasks([...tasks, payload]);
  };

  //Delete Task
  const deleteTask = async (id) => {
    //DELETE request
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });

    //Filter out task item
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    //Fetch Task
    const taskToggle = await fetch(`http://localhost:3000/tasks/${id}`).then(
      (res) => res.json()
    );

    //Update Task
    const updateTask = { ...taskToggle, reminder: !taskToggle.reminder };

    //Save update task to server
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    //Recieve response
    const data = await response.json();

    //Update state
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onToggle={onToggle} />
      <Form isToggle={isToggle} createNewTask={createNewTask} />
      <ListOfTask
        tasks={tasks}
        deleteTask={deleteTask}
        toggleReminder={toggleReminder}
      />
    </div>
  );
};

export default App;
