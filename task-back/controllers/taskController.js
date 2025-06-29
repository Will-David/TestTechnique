"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskController = exports.updateTaskController = exports.getTaskByIdController = exports.getAllTaskController = exports.createTaskController = void 0;
const taskServices_1 = require("../services/taskServices");
const createTaskController = async (request, response) => {
    const { title, description, status } = request.body;
    const task = (0, taskServices_1.createTaskService)({
        title: title,
        description: description,
        status: status
    });
    return response.status(201).send(task);
};
exports.createTaskController = createTaskController;
const getAllTaskController = async (request, response) => {
    const allTask = (0, taskServices_1.getAllTaskServices)();
    return response.status(201).send(allTask);
};
exports.getAllTaskController = getAllTaskController;
const getTaskByIdController = async (request, response) => {
    const { id } = request.params;
    const getTaskId = (0, taskServices_1.getTaskByIdServices)(id);
    return response.status(201).send(getTaskId);
};
exports.getTaskByIdController = getTaskByIdController;
const updateTaskController = (request, response) => {
    const { id } = request.params;
    const { title, description, status } = request.body;
    const taskUpdate = (0, taskServices_1.updateTaskByIdServices)(id, {
        title: title,
        description: description,
        status: status
    });
    return response.status(201).send(taskUpdate);
};
exports.updateTaskController = updateTaskController;
const deleteTaskController = async (request, reply) => {
    const { id } = request.params;
    const task = (0, taskServices_1.removeTaskService)(id);
    return reply.status(200).send(task);
};
exports.deleteTaskController = deleteTaskController;
