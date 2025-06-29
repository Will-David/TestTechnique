import { title } from "process";
import { TaskRequest } from "../datas/taskRequest";
import { TaskModel } from "../models/taskModels";
import { TaskResponse } from "../datas/taskResponse";
let tasks: TaskModel[] = []

export const createTaskService = (data: TaskRequest): TaskRequest => {
    const task = {
        title: data.description,
        description: data.description,
        status: data.status,
        id: crypto.randomUUID()
    }
    tasks.push(task)
    return task
}

export const getAllTaskServices = (): TaskResponse[] => {
    return tasks
}

export const getTaskByIdServices = (id: string): TaskResponse  | undefined => {
    const taskId = tasks.find((task) => (task.id === id))
    return taskId
}

export const updateTaskByIdServices = (id: string, data: TaskRequest) => {
    const task = getTaskByIdServices(id);
    
    if (!task) {
        return "Cet Id id n'existe pas";
    }
    task.title = data.title
    task.description = data.description
    task.status = data.status
    return task
}

export const removeTaskService = (id: string) => {
  const task = getTaskByIdServices(id)
  if (!task) {
    return "Aucune tâche trouvé"
  }
  const taskIndex = tasks.findIndex((task)=> task.id === id)
  console.log (taskIndex)
  if (taskIndex === -1) {
    return false
  }
  tasks.splice(taskIndex, 1)
  return true
}