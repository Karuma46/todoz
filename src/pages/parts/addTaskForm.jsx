import "./styles.scss"

const AddTaskForm = () => {
  return (
    <>
      <div id="addTaskForm">
        <div className="inputGroup">
          <input type="text" placeholder="Add Task" />
          <span className="material-symbols-rounded">Send</span>
        </div>
        <div className="taskOptions">
          <span className="material-symbols-rounded">schedule</span>
          <span className="material-symbols-rounded">close</span>
        </div>
      </div>
    </>
  )
}

export default AddTaskForm