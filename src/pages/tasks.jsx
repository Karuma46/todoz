import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import AddTaskForm from "./parts/addTaskForm"
import TaskComponent from "./parts/taskComponent"
import _ from "underscore"
import "./styles.scss"
import { FormatTime } from "functions/datetime"

const Tasks = () =>{
  let {folder} = useParams()
  const [reload, setReload] = useState('')
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([]) 
  const [showAddTaskForm, setShowAddTaskForm] = useState(false)
  
  const handleCompleteTask = (uuid, bool) => {
    const getTasks = JSON.parse(localStorage.getItem('tasks'))
    var task = _.find(getTasks, (t) => { return t.uuid === uuid})
    var newtasks = _.filter(getTasks, (t) => {return t.uuid !== uuid})
    newtasks.push({...task, completed: bool})
    localStorage.setItem('tasks', JSON.stringify(newtasks))
    setReload(Math.random())
  }

  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem('tasks'))
    if(getTasks){
      if(folder){
        setTasks([..._.where(getTasks, {folder: folder, completed: false})])
        setCompletedTasks([..._.where(getTasks, {folder: folder, completed: true})])
      } else {
        setTasks([..._.where(getTasks, {completed: false})])
        setCompletedTasks([..._.where(getTasks, {completed: true})])
      }
    }
  },[folder, reload])

  return (
    <>
      <div className="tasksContainer">

        <h2>
          {folder && folder}
          {!folder && 'Today'}
        </h2>

        <div className="tasks">
          {
            tasks.length > 0 && tasks.map(task => (
              <TaskComponent task={task} onClick={handleCompleteTask} />
            ))
          }
          
        </div>

        {
          completedTasks.length > 0 &&
        <div className="completed_tasks">
          <h4>Completed</h4>
            {
              completedTasks.map(task => (
              <TaskComponent task={task} onClick={handleCompleteTask} />
            ))
          }
          </div>
          }
      </div>

      {showAddTaskForm && <AddTaskForm /> }

      <div className="addTaskBtn">
        <div className="btn" onClick={() => setShowAddTaskForm(() => !showAddTaskForm)}>
          
          <span className="material-symbols-rounded">
            {!showAddTaskForm && 'Add'}
            {showAddTaskForm && 'Close'}
          </span>
        </div>
      </div>
    </>
  )
}

export default Tasks