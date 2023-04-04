
import {useState, useEffect} from "react"


function TaskList (){

    

    if (tasks.length===0){
        return <h1>No hay tareas aun</h1>
    }
    return (
        <div key={task.id}>
            {tasks.map((task) => (
                <div>
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                </div>
                ))}
        </div>
    )
}
export default TaskList