import AddTask from './components/AddTask';
import Header from './components/Header'
import Tasks from './components/Tasks'
import React, {useState} from 'react';


const tasks = [
  {
    "id": 1,
    "name":"Learn React",
    "remind": true
  },
  {
    "id": 2,
    "name":"Upload zeropay",
    "remind": false
  },
  {
    "id": 3,
    "name":"Spend some free time",
    "remind": true
  },
]


function App() {

  const [showAdd, setShowAdd] = useState(false)
  const [allTasks, setAllTasks] = useState(tasks)


  const toggleAdd = () => {
    setShowAdd(
      !showAdd
    )
  }

  const handleAddTask = (task) => {
    setAllTasks(
      [task, ...allTasks]
    )
  }

  const handleDeleteTask = (id) => {
    const deletedTaskList = allTasks.filter((task) => task.id !== id);
    setAllTasks(deletedTaskList);

  }


  return (
    <div className="App container">
      <Header toggleAdd={toggleAdd} />
      {
       showAdd && <AddTask addTask={handleAddTask} />
      }
      <Tasks tasks={allTasks} deleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
