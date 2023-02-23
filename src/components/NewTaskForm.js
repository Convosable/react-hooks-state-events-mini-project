import React, {useState} from "react";



function NewTaskForm({onTaskFormSubmit, categories, taskList, setTaskList}) {

  const [formCategory, setFormCatergory] = useState('Code');
  const [inputName, setInputName] = useState('')

  function handleFormCategoryChange(e) {
    setFormCatergory(e.target.value);
  }

  function handleFormNameChange(e) {
    setInputName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({category: formCategory, text: inputName})
  }

  const noAll = categories.filter(category => {
    return category !== 'All' 
  })

  return (
    <form onSubmit = {handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange = {handleFormNameChange} value = {inputName} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange = {handleFormCategoryChange} value = {formCategory} name="category">
        {noAll.map((category) =>
        <option value={category}>{category}</option>
        )}        
      </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
