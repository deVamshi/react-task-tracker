
import {useState } from 'react';

function AddTask({addTask}) {
   const [name, setName] = useState("")
   const [remind, setRemind]   = useState(false)

   const handleSubmit = (e) => {
       e.preventDefault();
       console.log("WTF")
       addTask({
           id: Math.random(),
           name,
           remind
       })
   }
    return (
        <div>
            <hr></hr>
            <label>
                Name of the task:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <div></div>
            <label>
                Do you want to remind:
            <input type="checkbox"  value={remind} onChange={(e) => setRemind(e.target.value)}/>
            </label>
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default AddTask
