import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function App(props) {
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };
  const listHeadingRef = useRef(null);
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks?.filter(FILTER_MAP[filter])
                    .map((task) => <Todo id={ task.id } name={ task.name } completed={ task.completed } 
                    key={ task.id } toggleTaskCompleted={ toggleTaskCompleted } deleteTask={ deleteTask}
                    editTask={ editTask }
                    />);
  // const buttonList = props.buttons?.map((holds) => <FilterButton id={ holds.id } name={ holds.name } key={ holds.id } />)
  const taskListNum = taskList.length
  const taskNoun = taskListNum !== 1 ? "tasks" : "task";
  const names = tasks.map((todo) => todo.name);
                      // console.log(names)
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    tasks
    setTasks([...tasks, newTask]);
    // console.log([...tasks, newTask])
    // alert(`Hello ${name}`);
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if ( id === task.id ) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) =>  id !== task.id);
    setTasks(remainingTasks);
    // console.log(id);
  }
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // Copy the task and update its name
        return { ...task, name: newName };
      }
      // Return the original task if it's not the edited task
      return task;
    });
    setTasks(editedTaskList);
  }
  
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton key={name} name={name} isPressed={ name === filter} setFilter={ setFilter } />
  ));
  // console.log(FILTER_MAP[filter])
  // console.log(props.names)
  const prevTaskLength = usePrevious(taskListNum);
  useEffect(() => {
    if (taskListNum < prevTaskLength) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);  

  return (
    <div className="todoapp stack-large">
      <h1>Got-todO</h1>
      <Form addTask={ addTask } names={ names } />
      <div className="filters btn-group stack-exception"> 
        { filterList }
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={ listHeadingRef }>{ taskListNum } { taskNoun } remaining</h2>
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
