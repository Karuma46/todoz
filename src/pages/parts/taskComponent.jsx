import propTypes from 'prop-types'
import { FormatTime } from "functions/datetime"

const TaskComponent = ({task, onClick}) => {
  return (
    <>
      <div className={`task ${task.completed && 'completedTask'}`}>
        <span className="material-symbols-rounded" onClick={() => {onClick(task.uuid, !task.completed)}}>
          {task.completed && 'check_box'}
          {!task.completed && 'check_box_outline_blank'}
        </span>
        <p className="taskname">{task.name}</p>
        <p className="timestamp">{FormatTime(task.datetime)}</p>

        <div className="taskActions">
          <span className="material-symbols-rounded">
            edit
          </span>
          <span className="material-symbols-rounded">
            delete
          </span>
        </div>
      </div>
    </>
  )
}

TaskComponent.propTypes = {
  task: propTypes.shape({
    uuid: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    datetime: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired,
  }),
  onClick: propTypes.func.isRequired,
}

export default TaskComponent