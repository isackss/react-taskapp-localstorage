import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = (props) => {
  const TaskTableRows = (doneValue) => {
    return props.taskItems
    .filter(task => task.done === doneValue)
    .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={props.toggleTask} />
    ));
  };
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{TaskTableRows(props.doneValue)}</tbody>
    </table>
  );
};

export default TaskTable;
