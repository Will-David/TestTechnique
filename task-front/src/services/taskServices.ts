import type { ApiResponse } from '../data/api_res';
import type { TaskRequest } from '../data/task_req';
import type { TaskResponse } from '../data/task_res';
import { httpClient } from './../plugins/httpClient';


export const getTask = async function(): Promise<TaskResponse[]> {
    try {
        const response = await httpClient.get('/tasks')
        return response.data as TaskResponse[]
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const createTask = async function (task: TaskRequest): Promise<ApiResponse<TaskResponse>> {
    try {
        const response = await httpClient.post('/tasks', task)
        console.log(response)
        return {
            status: response.status,
            data: response.data as TaskResponse,
            message: response.data.message
        } 
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const getTaskById = async function (id: string):Promise<TaskResponse | undefined> {
    try {
        const response = await httpClient.get(`/tasks/${id}`,)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const updateService = async function(id: string, data: TaskRequest): Promise<ApiResponse<TaskResponse>> {
    try {
        const response = await httpClient.put(`/tasks/${id}`, data)
        return {
            status: response.status,
            data: response.data,
            message: response.data.message
        }
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const deleteServices = async function(id: string): Promise<ApiResponse<TaskResponse>>
{
    try {
        const response = await httpClient.delete(`/tasks/${id}`)
        return {
            status: response.status
        }
    } catch (error) {
        console.log(error)   
        throw error
    }
}