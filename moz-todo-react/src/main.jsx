import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Form from './components/Form.jsx'
import './index.css'

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Rinse", completed: true },
  { id: "todo-3", name: "Repeat", completed: false },
];
// const TOPBUTTONS = [
//   { id: "button-0", name: "All" },
//   { id: "button-1", name: "Active" },
//   { id: "button-2", name: "Achieved" },
// ];
// const names = DATA.map((todo) => todo.name);
// console.log(names)
// component - reusable module that renders part of app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* buttons={ TOPBUTTONS } */}
    <App subject="Crank" tasks={ DATA } /> 
    {/* <Form names={ names } /> */}
  </StrictMode>,
)
