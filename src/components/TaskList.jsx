import { useEffect, useState } from "react";
import { Task } from "../Task/Task";

export function TaskList(props){
    const { list } = props;
    const [savedTasks, setSaved] = useState({});

    const handleCompleatedChange = (name, state) => {
        let compleatedTasks = {...savedTasks};
        compleatedTasks[`${name}`] = {"compleated": state};
        setSaved(compleatedTasks);
        localStorage.setItem("tasks", JSON.stringify(compleatedTasks));
    };

    const setInitialState = (task) => {
        if(savedTasks[`${task.name}`] && JSON.stringify(savedTasks) !== "{}"){
            return savedTasks[`${task.name}`]["compleated"];
        }
        return task.state
    };

    useEffect(() => {
        const compleatedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (compleatedTasks !== null) setSaved(compleatedTasks);
    }, []);

    return (
        <ul>
            {list.map((task) => (
                <Task 
                    key={ task.name } 
                    name={ task.name } 
                    onCompleatedClick={handleCompleatedChange}
                    state={ setInitialState(task) } 
                    />
            ))}
        </ul>
    );
}