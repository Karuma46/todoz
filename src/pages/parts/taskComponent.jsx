import propTypes from 'prop-types'
import { FormatTime } from "functions/datetime"
import { useContext } from 'react'
import { PromptContext } from 'components/prompt/context'
import _ from "underscore"
import { TasksContext } from 'pages/context'

const TaskComponent = ({task, onClick}) => {

  let {setShowPrompt, setPromptText, setPromptAffirm} = useContext(PromptContext)
  let {setReload} = useContext(TasksContext)

  const handleDeleteTask = (uuid) => {
    const getTasks = JSON.parse(localStorage.getItem('tasks'))
    var newtasks = _.filter(getTasks, (t) => {return t.uuid !== uuid})
    localStorage.setItem('tasks', JSON.stringify(newtasks))
    setShowPrompt(false)
    setReload(Math.random())
  }

  const handleShowPrompt = () => {
    setPromptText('Delete this task?')
    setPromptAffirm({method: handleDeleteTask, uuid: task.uuid})
    setShowPrompt(true)
  }

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
          <span className="material-symbols-rounded" onClick={handleShowPrompt}>
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