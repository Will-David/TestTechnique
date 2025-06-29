import { FastifyInstance } from "fastify"
import { createTaskController, deleteTaskController, getAllTaskController, getTaskByIdController, updateTaskController } from "../controllers/taskController"
import { removeTaskService } from "../services/taskServices"

export const taskRoutes = (fastify: FastifyInstance) => {
    fastify.get('/tasks', getAllTaskController)
    fastify.post('/tasks', createTaskController)
    fastify.get('/tasks/:id', getTaskByIdController)
    fastify.put('/tasks/:id', updateTaskController)
    fastify.delete('/tasks/:id', deleteTaskController)
}