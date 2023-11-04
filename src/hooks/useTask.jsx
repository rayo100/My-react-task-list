import { useEffect, useState } from "react";

export function useTasks(){
    const [tasks, setSaved] = useState([]);

    const createTask = (task) => {
        task["id"] = Date.now().toString();
        task["state"] = false;
        addTask(task);
    };

    const deleteTask = (task) => {
        let savedTasks = [...tasks];
        savedTasks = savedTasks.filter((e) => e.id != task.id);
        setSaved(savedTasks);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    };

    const updateTask = (task) => {
        let savedTasks = [...tasks];
        savedTasks = savedTasks.map((e) => {
            if(e.id == task.id){
                e.name = task.name;
                e.state = task.state;
            }
            return e;
        })
        setSaved(savedTasks);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    };

    const addTask = (task) => {
        let savedTasks = [...tasks];
        savedTasks.push(task);
        setSaved(savedTasks);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    };

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (savedTasks !== null) setSaved(savedTasks);
    }, []);

    return [tasks, createTask, deleteTask, updateTask];
}