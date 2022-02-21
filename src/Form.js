import { useState } from "react";
import "./Form.css";

const Form = ({ isToggle, createNewTask }) => {
  // Form component state
  const [inputValue, setInputValue] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [isReminder, setIsReminder] = useState(false);

  // task input handler
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // task date input handler
  const onInputDateChange = (e) => {
    setInputDate(e.target.value);
  };

  // task reminder input handler
  const onInputReminderChange = (e) => {
    setIsReminder(!isReminder);
  };

  // submit input handler
  const onSubmitEvent = (e) => {
    e.preventDefault();

    if (!inputValue || !inputDate) {
      alert("Please fill up all input fields!");
    }

    if (inputValue || inputDate) {
      createNewTask({
        task: inputValue,
        date: inputDate,
        reminder: isReminder,
      });
    }

    setInputValue("");
    setInputDate("");
    setIsReminder(false);
  };

  return isToggle === false ? (
    <div className="msg-prompt">
      <h2>Start Adding Task</h2>
    </div>
  ) : (
    <form onSubmit={onSubmitEvent}>
      <input
        type="text"
        className="form-input"
        placeholder="Add Task"
        onChange={onInputChange}
        value={inputValue}
      />

      <input
        className="form-input"
        placeholder="Add Date"
        onChange={onInputDateChange}
        value={inputDate}
      ></input>

      <label htmlFor="reminder">Reminder</label>
      <input
        type="checkbox"
        id="reminder"
        onChange={onInputReminderChange}
        value={isReminder}
      ></input>

      <button className="form-submit">Submit</button>
    </form>
  );
};

export default Form;
