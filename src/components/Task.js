
function Task({task, deleteTask}) {
    return (
        <div> <hr></hr>

        <h3>
            {task.name}
        </h3>
        <p>
            Should remind: {task.remind ? "TRUE" : "FALSE"}
        </p>
        <btn className="btn btn-done" onClick={() => deleteTask(task.id)}>
            DONE
        </btn>
       
    
        </div>
    )
}

export default Task
