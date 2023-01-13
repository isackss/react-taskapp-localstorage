const VisibilityControl = (props) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      props.clearCompletedTasks();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border border-secondary align-items-center">
      <div className="form-check form-switch">
        <input
        className="form-check-input"
          type="checkbox"
          value={props.showCompleted}
          onChange={() => props.setShowCompleted(!props.showCompleted)}
          checked={props.showCompleted}
        />{" "}
        <label>Show Tasks Done</label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger btn-sm">
        Clear
      </button>
    </div>
  );
};

export default VisibilityControl;
