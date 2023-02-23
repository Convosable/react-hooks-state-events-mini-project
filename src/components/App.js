import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [taskList, setTaskList] = useState(TASKS)
  const [selectedBtn, setSelectedBtn] = useState('All');

  function onTaskFormSubmit(newTask) {
    setTaskList([...taskList, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedBtn = {selectedBtn} setSelectedBtn = {setSelectedBtn} categories = {CATEGORIES} />
      <NewTaskForm onTaskFormSubmit = {onTaskFormSubmit} taskList = {taskList} setTaskList = {setTaskList} categories = {CATEGORIES}/>
      <TaskList selectedBtn = {selectedBtn} taskList = {taskList} setTaskList = {setTaskList}/>
    </div>
  );
}

export default App;
