import React from 'react';
import Task from './Task'; 

const TaskList = ({ tasks, onToggleTask }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.name}>
            <Task taskName={task.name} state={task.completed} onToggle={onToggleTask} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;