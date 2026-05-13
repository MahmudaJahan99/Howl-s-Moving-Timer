import { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SubtaskSelector from '../components/SubtaskSelector/SubtaskSelector'
import { getAllTasks } from '../utils/taskManager'

const TaskSelect = () => {
  const { taskId } = useParams()
  const navigate = useNavigate()

  // Get the task from the data
  const task = useMemo(() => {
    const tasks = getAllTasks()
    return tasks.find((t) => t.id === taskId)
  }, [taskId])

  // If task not found, redirect to home
  if (!task) {
    navigate('/')
    return null
  }

  return <SubtaskSelector task={task} />
}

export default TaskSelect