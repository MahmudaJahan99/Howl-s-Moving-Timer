import { useMemo } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Timer from '../components/Timer/Timer'
import { getAllTasks } from '../utils/taskManager'

const TimerPage = () => {
  const { taskId, subtaskId } = useParams()
  const location = useLocation()

  // Get task and subtask
  const { task, subtask } = useMemo(() => {
    const tasks = getAllTasks()
    const foundTask = tasks.find((t) => t.id === taskId)

    if (!foundTask) return { task: null, subtask: null }

    const foundSubtask = foundTask.subtasks.find((s) => s.id === subtaskId)

    return { task: foundTask, subtask: foundSubtask }
  }, [taskId, subtaskId])

  // If task or subtask not found, show error
  if (!task || !subtask) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Task or subtask not found.</p>
      </div>
    )
  }

  return <Timer task={task} subtask={subtask} />
}

export default TimerPage