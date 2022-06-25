import "./styles.scss"

const Tasks = () =>{
  return (
    <>
      <div className="tasksContainer p-4">
        <h2>Today</h2>

        <div className="tasks">
          <div className="task">
            <span className="material-symbols-rounded">check_box_outline_blank</span>
            <p className="taskname">Make Cookies</p>
            <p className="timestamp">12:45</p>
          </div>

          <div className="task">
            <span className="material-symbols-rounded">check_box_outline_blank</span>
            <p className="taskname">Make Cookies</p>
            <p className="timestamp">12:45</p>
          </div>
        </div>

        <div className="completed_tasks">
          <h3>Completed</h3>
          <div className="task completed">
            <span className="material-symbols-rounded">check_box_outline_blank</span>
            <p className="taskname">Make Cookies</p>
            <p className="timestamp">12:45</p>
          </div>
        </div>
      </div>

      <div className="addTaskBtn">
        <div className="btn">
          <span className="material-symbols-rounded">Add</span>
        </div>
      </div>
    </>
  )
}

export default Tasks