import {createContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import _ from 'underscore'

export const TasksContext = createContext()

export const TasksContextProvider = ({children}) => {
  return (
    <>
      <TasksContext.Provider value={useTasksContextProvider()}>
        {children}
      </TasksContext.Provider>
    </>
  )
}

const useTasksContextProvider = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [reload, setReload] = useState('')
  const [folder, setFolder] = useState('')
  

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
  },[reload, folder])

  return {tasks, completedTasks, handleCompleteTask, setReload, setFolder}
}