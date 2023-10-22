import React, { Component } from 'react';
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import './App.css'

class App extends Component {
  state = {
    tasks: [
      { name: 'Aprender sobre React', completed: true },
      { name: 'Realizar el laboratorio sobre listado de tareas', completed: true },
      { name: 'Pasar IETI', completed: false },
    ],
  };

  handleToggleTask = (taskName) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) => {
        if (task.name === taskName) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

      return { tasks: updatedTasks };
    });
  };

  handleTaskNameChange = (event) => {
    this.setState({ newTaskName: event.target.value });
  };

  handleNewTask = (event) => {
    event.preventDefault();
    const newTaskName = this.state.newTaskName;
    if (newTaskName.trim() !== '') {
      const newTask = { name: newTaskName, completed: false };
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTask],
        newTaskName: '',
      }));
    }
  };

  render() {
    return (
      <div className="App">
        <Header /> {}
        <form onSubmit={this.handleNewTask}>
          <input
            type="text"
            placeholder="Nueva tarea"
            value={this.state.newTaskName}
            onChange={this.handleTaskNameChange}
          />
          <button type="submit">Agregar tarea</button>
        </form>
        <TaskList tasks={this.state.tasks} onToggleTask={this.handleToggleTask} />
      </div>
    );
  }
}

export default App;
