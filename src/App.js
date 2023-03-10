import { useState, useEffect } from "react";
import "./App.css";
import Container from "./components/Container";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };
  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const clearCompletedTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable
          taskItems={taskItems}
          toggleTask={toggleTask}
          doneValue={false}
        />
        <VisibilityControl
          showCompleted={showCompleted}
          setShowCompleted={setShowCompleted}
          clearCompletedTasks={clearCompletedTasks}
        />
        {showCompleted && (
          <TaskTable
            taskItems={taskItems}
            toggleTask={toggleTask}
            doneValue={showCompleted}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
