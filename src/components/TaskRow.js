const TaskRow = (props) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {props.task.name}
        <input
          type="checkbox"
          checked={props.task.done}
          onChange={() => props.toggleTask(props.task)}
        />
      </td>
    </tr>
  );
};

export default TaskRow;
