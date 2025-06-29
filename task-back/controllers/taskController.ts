import { FastifyReply, FastifyRequest } from "fastify";
import { request } from "http";
import { TaskRequest } from "../datas/taskRequest";
import { TaskResponse } from "../datas/taskResponse";
import { createTaskService, getAllTaskServices, getTaskByIdServices, removeTaskService, updateTaskByIdServices } from "../services/taskServices";

export const createTaskController = async (request: FastifyRequest<{Body: TaskRequest}>, response: FastifyReply): Promise<TaskResponse> => {
    const {title, description, status} = request.body
    const task = createTaskService({
        title: title, 
        description: description,
        status: status
    })
    return response.status(201).send(task)
}

export const getAllTaskController = async (request: FastifyRequest<{Body: TaskRequest}>, response: FastifyReply<{Body: TaskResponse}>): Promise<TaskResponse> => {
    const allTask = getAllTaskServices()
    return response.status(201).send(allTask)
}

export const getTaskByIdController = async (
    request: FastifyRequest<{Params: {id: string}, Body: TaskRequest}>, 
    response: FastifyReply
    ) => {
    const {id} = request.params
    const getTaskId = getTaskByIdServices(id)
    return response.status(201).send(getTaskId)
}

export const updateTaskController = (
    request: FastifyRequest<{Params: {id: string}, Body: TaskRequest}>, 
    response: FastifyReply
    ) => {
    const {id} = request.params
    const { title, description, status } = request.body

    const taskUpdate = updateTaskByIdServices(id, {
        title: title,
        description: description,
        status: status
    })
    return response.status(201).send(taskUpdate)
}

export const deleteTaskController = async (request: FastifyRequest<{Params: {id: string}}>, reply: FastifyReply) => {
    const { id } = request.params
    const task = removeTaskService(id)
    return reply.status(200).send(task)
}