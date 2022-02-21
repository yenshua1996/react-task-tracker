import "./Header.css";

const Header = ({ onToggle }) => {
  const onClickEvent = () => {
    onToggle();
  };

  return (
    <header>
      <div className="header-container">
        <h1>Task Tracker</h1>

        <button className="header-btn" onClick={onClickEvent}>
          Add Task
        </button>
      </div>
    </header>
  );
};

export default Header;
