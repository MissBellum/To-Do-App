import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks?.map((task) => <Todo id={ task.id } name={ task.name } completed={ task.completed } key={ task.id } toggleTaskCompleted={ toggleTaskCompleted } />);
  const buttonList = props.buttons?.map((holds) => <FilterButton id={ holds.id } name={ holds.name } key={ holds.id } />)
  const taskListNum = taskList.length
  const taskNoun = taskListNum !== 1 ? "tasks" : "task";

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
    console.log([...tasks, newTask])
    // alert(`Hello ${name}`);
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if ( id === task.id ) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks)
  }
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={ addTask } />
      <div className="filters btn-group stack-exception"> 
        { buttonList }
      </div>
      <h2 id="list-heading">{ taskListNum } { taskNoun } remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        { taskList }
      </ul>
    </div>
  );
}

export default App;
