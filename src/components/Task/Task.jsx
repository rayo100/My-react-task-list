import { useEffect, useState } from "react";
import { Task } from "../Task/Task";
import { useTasks } from "../../hooks/useTasks";

export function TaskList(){
    const [tasks, createTask, deleteTask, updateTask] = useTasks();

    const handleCreateTask = () => {
        let newName = prompt("Enter the name of the new task: ")
        let newTask = {
            name: newName
        }
        createTask(newTask);
    };

    let handleUpdateTask = (task) => {
        let newName = prompt("Enter the new name of the task: ");
        task.name = newName;
        updateTask(task);
    };

    let handleDeleteTask = (task) => {
        deleteTask(task)
    };

    let checkTask = (task) => {
        updateTask(task);
    };

    return (
        <>
            <button onClick={handleCreateTask}>Add</button>
            <ul>
                {tasks.map((task) => (
                    <Task 
                        key={ task.id } 
                        task={ task }
                        onUpdate={handleUpdateTask}
                        onDelete={handleDeleteTask}
                        onCheck={checkTask}
                    />
                ))}
            </ul>
        </>
        
    );
}