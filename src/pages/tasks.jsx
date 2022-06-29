import { useState, useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import AddTaskForm from "./parts/addTaskForm"
import TaskComponent from "./parts/taskComponent"
import _ from "underscore"
import "./styles.scss"
import PromptComponent from "components/prompt"
import { TasksContext } from "./context"

const Tasks = () =>{
  let {folder} = useParams()
  let {tasks, completedTasks, handleCompleteTask, setFolder} = useContext(TasksContext)
  const [showAddTaskForm, setShowAddTaskForm] = useState(false)
  
  useEffect(() => {
    setFolder(folder)
  }, [folder])

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

      <PromptComponent />
    </>
  )
}

export default Tasks