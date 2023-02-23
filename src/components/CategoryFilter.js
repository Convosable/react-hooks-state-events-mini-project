import React from "react";

function CategoryFilter({selectedBtn, setSelectedBtn, categories}) {


  function handleSelectedCategory(selectedCategory) {
      setSelectedBtn(selectedCategory)
    }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => 
      <button 
        key = {category} 
        value = {selectedBtn} 
        onClick = {() => handleSelectedCategory(category)} 
        className = {selectedBtn === category ? 'selected' : null}>
      {category}
      </button>)}
    </div>
  );
}

export default CategoryFilter;