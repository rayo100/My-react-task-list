import React from 'react';

const Task = ({ taskName, state, onToggle }) => {
    const handleChange = () => {
      onToggle(taskName);
    };
  
    return (
      <div>
        <input
          type="checkbox"
          id={taskName}
          checked={state}
          onChange={handleChange}
        />
        <label htmlFor={taskName}>{taskName}</label>
      </div>
    );
  };
  
  export default Task;
  
  
  
  