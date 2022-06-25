import { useState, useEffect } from "react"
import "./styles.scss"
import { v4 as uuidv4 } from 'uuid';

const AddTaskForm = () => {
  const [newTask, setNewTask] = useState({
    name: '',
    datetime: '',
    completed: false,
    folder: '',
    uuid: uuidv4()
  });
  const [folders, setFolders] = useState([])

  const handleSubmit = () => {
    var tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks){
      tasks.push(newTask);
    } else {
      tasks = []
      tasks.push(newTask)
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setNewTask({
      name: '',
      datetime: '',
      completed: false,
      folder: '',
      uuid: uuidv4()
    })
  }

  useEffect(() => {
    var getFolders = JSON.parse(localStorage.getItem('folders'))
    if(getFolders){
      setFolders(getFolders)
    }
  },[])

  return (
    <>
      <div id="addTaskForm">
        <div className="inputGroup">
          <input type="text" value={newTask.name} placeholder="Add Task" onChange={(e) => setNewTask({...newTask, name: e.target.value})} />
          <span className="material-symbols-rounded" onClick={handleSubmit}>Send</span>
        </div>
        <div className="taskOptions">
          <div className="inputGroup">
            <input type="datetime-local" id="datetime" value={newTask.datetime} onChange={(e) => setNewTask({...newTask, datetime:e.target.value})}  />
            {/* <label htmlFor="datetime">
              <span className="material-symbols-rounded">schedule</span>
            </label> */}
          </div>

          <div className="inputGroup">
            <select name="" id="" onChange={(e) => setNewTask({...newTask, folder: e.target.value})}>
              <option>Pick a folder</option>
              {
                folders.length > 0 && folders.map(folder => (
                  <option value={`${folder.name}`}>{folder.name}</option>
                )) 
              }
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTaskForm