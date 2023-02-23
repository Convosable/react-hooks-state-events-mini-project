import React from "react";
import Task from "./Task"


function TaskList({taskList, setTaskList, selectedBtn}) {

  function handleTaskDelete(taskToDelete) {
    const newList = taskList.filter((task) => {
      return task.text !== taskToDelete
    })
    setTaskList(newList)
  }

  // put state fro selcetedBtn in App
     // filter through my kist of tasks
     // if the task has a category === sealctedBtn
     // return thouse items to be displayed


// const itemsToDisplay = taskList.filter((task) => {
//   if (task.category === selectedBtn) {
//     return task.text
//   } else {}
// });

  const itemsToDisplay = taskList.filter((task) => {
  if (selectedBtn === "All") {
    return true
  }
  else {
    return task.category === selectedBtn;
  }
});
  

  return (
    <div className="tasks">
      {itemsToDisplay.map((task) => (
        <Task key = {task.text} text = {task.text} category = {task.category} handleTaskDelete = {handleTaskDelete}/>
      ))}
    </div>
  );
}

export default TaskList;

// const itemsToDisplay = taskList.filter((task) => {
//   if (selectedBtn === 'All') {
//     return task
//   }
//   else if (task.category === selectedBtn) {
//     return true;
//   }
// });